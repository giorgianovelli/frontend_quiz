npm run build --prod
SET AWS_ACCESS_KEY_ID=AKIASTNGBHQKFOUNGXU7
SET AWS_SECRET_ACCESS_KEY=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
aws s3 sync dist/FormulaQuiz s3://frontend-quiz/ --acl=public-read --delete --exclude '.git/*'