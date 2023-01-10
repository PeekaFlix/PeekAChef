CREATE TABLE public.users (
  "_id" SERIAL NOT NULL,
  "username" VARCHAR NOT NULL UNIQUE,
  "password" VARCHAR NOT NULL, 
  CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.recipes (
  "_id" SERIAL NOT NULL,
  "users_id" SERIAL NOT NULL,
  "recipe" VARCHAR NOT NULL,
  "description" VARCHAR,
  "preparation_time" INTEGER NOT NULL,
  "cook_time" INTEGER NOT NULL,
  "serving_size" INTEGER NOT NULL,
  CONSTRAINT "recipes_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.ingredients (
  "_id" SERIAL NOT NULL,
  "recipe_id" SERIAL NOT NULL,
  "name" VARCHAR NOT NULL,
  "amount" VARCHAR NOT NULL,
  CONSTRAINT "ingredients_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

