----------> VER TAMAÑO DE ESQUEMA
  select owner ESQUEMA, 
   ROUND(SUM(bytes) / (1024 * 1024 * 1024), 4) GB,
   ROUND(SUM(bytes) / (1024 * 1024), 2) MB,
   ROUND(SUM(bytes) / 1024) KB
    from dba_segments
group by owner
order by owner;