-- Active: 1675686606967@@127.0.0.1@1433
CREATE TABLE courses (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    lessons INTEGER NOT NULL
);

INSERT INTO courses (id, name, lessons)
VALUES
("c001", "Javascript", 5),
("c002", "React", 10),
("c003", "Typescript", 15);

select * from courses