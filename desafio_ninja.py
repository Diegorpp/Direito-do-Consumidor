import requests
import json
head={'Referer':'https://www.reclameaqui.com.br/','User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'}

r = requests.get(url = 'https://iosite.reclameaqui.com.br/raichu-io-site-v1/company/shortname/kabum', params = None, headers=head) 
data = r.text
dicionario = json.loads(data)
teste = dicionario['companyIndex6Months']
teste = teste.replace('=','"="')
teste = teste.replace('=',':')
teste = teste.replace(',','","')
teste = teste.replace("{",'{"')
teste = teste.replace("}",'"}')
teste = teste.replace(" ","")

arquivo = open('data.json', 'w')
arquivo.write(teste)
arquivo.close()

