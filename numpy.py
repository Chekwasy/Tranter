import pandas as pd
import numpy as np

df = pd.read_excel('DATA-ASSESSMENT.xlsx')

print(df)

""" The mean of the column value"""
mean_value = np.mean(df['value'])

"""The standard deviation of the column value"""
std_dev = np.std(df['value'])

""" Filter the data based on the column value"""
filtered_df = df[df['value'] > 1]

""" Group the data by value and calculate the mean"""
grouped_df = df.groupby('value').mean()

filtered_df.to_excel('fil_res.xlsx', index=False)
