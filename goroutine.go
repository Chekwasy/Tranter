package main

import (
	"fmt"
	"sync"
)

func main() {
	// Create a channel to receive results
	results := make(chan int, 10)

	// Create a wait group to wait for all goroutines to finish
	var wg sync.WaitGroup

	// Start 10 goroutines to perform calculations
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go func(n int) {
			defer wg.Done()
			result := calculate(n)
			results <- result
		}(i)
	}

	// Close the channel when all goroutines are done
	go func() {
		wg.Wait()
		close(results)
	}()

	// Print results as they come in
	for result := range results {
		fmt.Println(result)
	}
}

func calculate(n int) int {
	// Simulate some calculation
	sum := 0
	for i := 0; i < n; i++ {
		sum += i
	}
	return sum
}
