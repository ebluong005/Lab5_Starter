# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No you would not use unit test for feature that uses frontend, backend, and use input. Unit test are more geared towards testing functions and individual components.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, this is a good candidate for a unit test because it an one component. This can be tested independently by passing strings of various lengths into a function and checking whether it correctly enforces the limit, without needing to involve the rest of the application.