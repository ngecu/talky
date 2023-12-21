CREATE TABLE Posts (
    postID VARCHAR(255) PRIMARY KEY,
    imageUrl VARCHAR(255),
    postContent VARCHAR(4000),
    userID VARCHAR(255),
    isDeleted BIT DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (userID) REFERENCES Users(userID)
);

SELECT * FROM Posts;
DROP TABLE Posts;
