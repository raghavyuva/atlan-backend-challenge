<p align="center">
<h2 align="center">Atlan Backend Challenge</h2> 
</p>

## Question 1
```
One of our clients wanted to search for slangs (in local language) for an answer
to a text question on the basis of cities 
(which was the answer to a different MCQ question)
```
### Approach 1
We can store slang translation in database based on cities and retrieve and perform actions whenever we require to search for slang.
although this works for small amount of data. but this fails when we have large amount of data and computational power required to process the data will be too much!

Complexity increases with increase in data amd table and relation between them as well. sometimes we may encounter redundancy in handling database attributes in such cases.

### Approach 2
We can use translate api to convert local / city based slang into uniform language i.e english and perform search operation on our database using the same.

Reduction of approach 1 drawbacks, Translation makes it easy with less storage capacity. it is easy to translate any slang to uniform language with supported API.

### Approach 3
How about an ui with slang convertor in real time? so that user will get to know what's going on and are we making it right! and send back search term to backend and query database and give back response.


## Question 2

```
A market research agency wanted to validate responses coming in
against a set of business rules (eg. monthly savings cannot be more 
than monthly income) and send the response back to the data collector to fix it when the rules generate a flag 
```

### Approach 1
We can take response from the front-end and check in for various business rules and send response back accordingly.

### Approach 2
How about creating regex pattern such that we ensure validation of the various incoming parameters?


## Question 3
```
A very common need for organizations is wanting all their data onto Google Sheets,
wherein they could connect their CRM, and also generate graphs and charts offered by Sheets out of the box. 
In such cases, each response to the form becomes a row in the sheet, and questions in the form become columns. 
```

### Approach 1
We can take input from the user and convert it to csv and save as blob to the database. but here processing the database and querying it becomes complicated and 
also it's not optimal store csv file into database as blob.

### Approach 2
We can store and retrieve response from the user and convert it to csv so that we can use it with sheets.
 we even may perform different operations based on requirement with the help of csv.


## Question 4
```
A recent client partner wanted us to send an SMS to the customer whose details are collected in the response as soon as the ingestion was complete reliably. 
The content of the SMS consists of details of the customer, which were a part of the answers in the response. 
This customer was supposed to use this as a “receipt” for them having participated in the exercise.
```

### Approach 1
we can use third party sms service to send sms as soon as we recieve response.

### Approach 2
create a webhook that automatically sends back taken response as a message to the customer as a receipt.
