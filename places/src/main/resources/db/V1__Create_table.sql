CREATE TABLE comment (
                          comment_id INT AUTO_INCREMENT,
                          user_name VARCHAR(255) NOT NULL,
                          place_name VARCHAR(255) NOT NULL,
                          city VARCHAR(255) NOT NULL,
                          description TEXT,
                          rating INT NOT NULL
);

