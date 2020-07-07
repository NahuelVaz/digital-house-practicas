-- Desafio 1
select last_name from actors;
-- Ejercicio 1 resultado: Gunn
select title, awards from movies;
-- Ejercicio 2 resultado: Parque
select * from movies
where title = "Titanic";
-- Ejercicio 3 resultado: 320
select * from series
where title = "Person of Interest";
-- Ejercicio 4 resultado: 4
select * from series
inner join seasons on series.id = seasons.serie_id
inner join episodes on seasons.id = episodes.season_id
where episodes.number = 2;
-- Ejercicio 5 resultado: 46
-- Desafio 2
select * from movies
where release_date between "1999-8-1" and "2004-12-31";
-- Ejercicio 1 resultado: rey
select * from movies
where title like "%a";
-- Ejercicio 2 resultado: Hotel
select count(*) from actors
where first_name = "Jim";
-- Ejercicio 3 resultado: 3
select sum(awards) from movies
where title like "La Guerra De Las Galaxias%";
-- Ejercicio 4 resultado: 13
select * from actors
inner join movies on movies.id = actors.favorite_movie_id
where actors.first_name = "Leonardo" and actors.last_name = "Di Caprio";
-- Ejercicio 5 resultado: de
-- Desafio 3
select * from actors
inner join movies on movies.id = actors.favorite_movie_id
where actors.rating = 2.3
order by movies.id;
-- Ejercicio 1 resultado: Titanic
select * from series
inner join genres on genres.id = series.genre_id;
-- Ejercicio 2 resultado: Fantasia
select * from movies
inner join genres on genres.id = movies.genre_id
where genres.name = "Animación";
-- Ejercicio 3 resultado: Intensamente
select * from actors
inner join actor_movie on actors.id = actor_movie.actor_id
inner join movies on actor_movie.movie_id = movies.id
where movies.title = "Parque Jurasico";
-- Ejercicio 4 resultado: Dern
select * from movies
inner join genres on genres.id = movies.genre_id
where movies.rating between 1 and 4;
-- Ejercicio 5 resultado: Mi
-- Desafio 4
select genres.name, avg(movies.length) from movies
inner join genres on genres.id = movies.genre_id
group by genres.name;
-- Ejercicio 1 resultado: Infantiles
select first_name, count(actor_movie.id) movie_total from actors
inner join actor_movie on actors.id = actor_movie.actor_id
inner join movies on actor_movie.movie_id = movies.id
group by actors.id
order by movie_total desc;
-- Ejercicio 2 resultado: Emma
select genres.name, count(movies.genre_id) from movies
inner join genres on genres.id = movies.genre_id
group by genres.name;
-- Ejercicio 3 resultado: 5
select genres.name, count(movies.genre_id) from movies
inner join genres on genres.id = movies.genre_id
group by genres.name
having count(movies.genre_id) > 3;
-- Ejercicio 4 resultado: 5
select genres.name, avg(movies.rating) from movies
inner join genres on genres.id = movies.genre_id
group by genres.name
having avg(movies.rating) > 3;
-- Ejercicio 5 resultado: 6
-- Consultas SQL
-- 1
select * from movies;
-- 2
select first_name, last_name, rating from actors;
-- 3
select first_name, last_name from actors
where rating > 7.5;
-- 4
select title, awards, rating from movies
where rating > 7.5 and awards > 2;
-- 5
select title, rating from movies
order by rating;
-- 6
select title from movies
limit 3;