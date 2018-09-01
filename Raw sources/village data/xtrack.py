import pandas as pd
import json
import io

def remove_html_tags(text):
    """Remove html tags from a string"""
    import re
    clean = re.compile('<.*?>|\\n')
    return re.sub(clean, '', text)

data = {}

for i in range(1, 1868):
# for i in range(1, 25):
  fileName = "xtrack" + str(i) + ".html"
  df = pd.read_html(fileName, encoding="utf8")
  with open(fileName) as f:
    locationType = remove_html_tags(f.readline())
    mainCode = str(int(float(df[0][1][0])))
    if mainCode in data:
      data[mainCode]["reference"] = "" if pd.isna(df[0][1][3]) else df[0][1][3]
      data[mainCode]["issueDate"] = "" if pd.isna(df[0][1][4]) else df[0][1][4]
      data[mainCode]["note"] = "" if pd.isna(df[0][1][5]) else df[0][1][5],
      data[mainCode]["type"] = locationType,
      data[mainCode]["east"] = "" if pd.isna(df[1][1][1]) else df[1][1][1]
      data[mainCode]["west"] = "" if pd.isna(df[1][1][2]) else df[1][1][2]
      data[mainCode]["south"] = "" if pd.isna(df[1][1][3]) else df[1][1][3]
      data[mainCode]["north"] = "" if pd.isna(df[1][1][4]) else df[1][1][4]
    else:
      data[mainCode] = {
        "khmer": df[0][1][1],
        "english": df[0][1][2],
        "parent": "0",
        "reference": "" if pd.isna(df[0][1][3]) else df[0][1][3],
        "issueDate": "" if pd.isna(df[0][1][4]) else df[0][1][4],
        "note": "" if pd.isna(df[0][1][5]) else df[0][1][5],
        "type": locationType,
        "east": "" if pd.isna(df[1][1][1]) else df[1][1][1],
        "west": "" if pd.isna(df[1][1][2]) else df[1][1][2],
        "south": "" if pd.isna(df[1][1][3]) else df[1][1][3],
        "north": "" if pd.isna(df[1][1][4]) else df[1][1][4],
      }

    lenChildren = len(df[2])
    for j in range(2, lenChildren - 1):
      subCode = str(int(float(df[2][1][j])))
      if subCode in data:
        data[subCode]["khmer"] = df[2][2][j]
        data[subCode]["english"] = df[2][3][j]
        data[subCode]["parent"] = mainCode
      else:
        data[subCode] = {
          "khmer": df[2][2][j],
          "english": df[2][3][j],
          "parent": mainCode,
        }
      if (locationType == 'Commune'):
        data[subCode]["type"] = "Village"
        data[subCode]["reference"] = "" if pd.isna(df[2][4][j]) else df[2][4][j]
        data[subCode]["note"] = "" if pd.isna(df[2][5][j]) else df[2][5][j]
      elif (locationType == 'District'):
        data[subCode]["reference"] = "" if pd.isna(df[2][5][j]) else df[2][5][j]


with io.open("data_file.json", "w", encoding="utf-8") as write_file:
  write_file.write(json.dumps(data, ensure_ascii=False))
