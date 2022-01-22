CREATE TABLE IF NOT EXISTS public.empresa
(
    id integer NOT NULL DEFAULT nextval('empresa_id_seq'::regclass),
    email character varying(100) COLLATE pg_catalog."default",
    senha character varying(100) COLLATE pg_catalog."default",
    session character varying(50) COLLATE pg_catalog."default",
    token character varying(155) COLLATE pg_catalog."default",
    apitoken character varying(255) COLLATE pg_catalog."default",
    servidor character varying(255) COLLATE pg_catalog."default",
    ip_cliente character varying(255) COLLATE pg_catalog."default",
    nome_empresa character varying(155) COLLATE pg_catalog."default"
)
