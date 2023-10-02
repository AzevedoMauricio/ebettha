from flask import Flask, jsonify, request
from flask_cors import CORS  # Importe a extensão Flask-CORS
import pandas as pd
import math

app = Flask(__name__)
CORS(app)
CORS(app, resources={r"/calculate_compatibility": {"origins": "http://localhost:3000"}})
@app.route('/calculate_compatibility', methods=['POST'])
def calculate_compatibility_api():
    limit = request.json.get('limit', 10)
    gestores = pd.read_csv("gestores1.csv")
    gestores['compatibility'] = 0
    candidate = request.json['candidate']
    candidate_df = pd.DataFrame(candidate, index=[0])
    competencias_superfit = ['score_res', 'score_eng', 'score_int', 'score_cur', 'score_sin', 'score_dis']
    competencias_workstyle = ['score_classic', 'score_order', 'score_change', 'score_tireless', 'score_explorer']
    tipo_workstyle = ['score_specialist', 'score_generalist']
    for c1 in competencias_superfit:
        for c2 in competencias_superfit:
            if c1 != c2:
                gestores['compatibility'] += gestores.apply(lambda row: calculate_distance(candidate_df.at[0, c1], candidate_df.at[0, c2], row[c1], row[c2]), axis=1)
    for c1 in competencias_workstyle:
        for c2 in competencias_workstyle:
            if c1 != c2:
                gestores['compatibility'] += gestores.apply(lambda row: calculate_distance(candidate_df.at[0, c1], candidate_df.at[0, c2], row[c1], row[c2]), axis=1)
    for c1 in tipo_workstyle:
        for c2 in tipo_workstyle:
            if c1 != c2:
                gestores['compatibility'] += gestores.apply(lambda row: calculate_distance(candidate_df.at[0, c1], candidate_df.at[0, c2], row[c1], row[c2]), axis=1)
    gestores['compatibility'] = gestores['compatibility'].div(52)
    gestores['compatibility'] = gestores['compatibility'].apply(lambda x: math.ceil(x))
    gestores_sorted = gestores.sort_values(by='compatibility', ascending=False).head(limit)
    result = gestores_sorted[['nome', 'logo', 'compatibility']].to_dict(orient='records')
    return jsonify(result)
def calculate_distance(x1, y1, x2, y2):
    distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    if distance >= 0:
        return math.ceil((1 - distance) * 100)
    else:
        if (1 - (2 * distance)) < 0:
            return 0
        else:
            return math.ceil((1 - (2 * distance)) * 100)
if __name__ == '__main__':
    app.run(debug=True, host='')