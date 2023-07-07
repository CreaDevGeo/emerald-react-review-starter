-- CREATE DATABASE "full-stack-react";

-- Table structure
CREATE TABLE creatures (
	id SERIAL PRIMARY KEY,
	name VARCHAR(25) NOT NULL,
	origin VARCHAR(50) NOT NULL,
	favorite BOOLEAN
);

INSERT INTO creatures (name, origin, favorite)
VALUES ('Jakalope', 'USA', false), 
('Chupacabra', 'Mexico', false), 
('Phoenix', 'Saudi Arabia', false);

