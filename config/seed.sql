USE chat_app_db;

INSERT INTO user (users_name, email) VALUES
    ('Jonah', 'jonah@test.com'),
    ('Steven', 'steven@test.com'),
    ('Odin', 'odin@test.com'),
    ('Troy', 'troy@test.com');

INSERT INTO post (title, content, user_id) VALUES
    ('Life Update', 'bought groceries', 1),
    ('Helped wifey', 'were all good now!', 3),
    ('did some code stuff', 'thats right...', 2);

