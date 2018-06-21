
Feature('aaaa');

Scenario('test something', (I) => {
	I.amOnPage('http://localhost:8000/1/174/docusign/documents');
	//I.sendPostRequest('http://localhost:8000/intake/rest/v1/question1', {"guid": "test-aaaa25611", "postal_code": 12112});
	//curl -X POST -d '{"guid":"aaaa256", "postal_code": 1211}' -H "Content-Type: application/json" http://localhost:8000/intake/rest/v1/question1

	I.amOnPage('http://localhost:8000/intake/question/?guid=test-aaaa25611');
	I.wait(3);
	I.see('Forbidden');
});
