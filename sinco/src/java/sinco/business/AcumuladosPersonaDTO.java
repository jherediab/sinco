/*     */ package sinco.business;
/*     */ 
/*     */ import sinco.business.AcumuladosPersonaDTO;
/*     */ import sinco.business.ParametrosDTO;
/*     */ 
/*     */ public class AcumuladosPersonaDTO {
/*     */   private int codigo_empleado;
/*     */   private int solicitudes_recibidas;
/*     */   private int solicitudes_atendidas;
/*     */   private int solicitudes_noatendidas;
/*     */   private int solicitudes_escaladas;
/*     */   private int oportunidad_excelente;
/*     */   private int oportunidad_buena;
/*     */   private int oportunidad_regular;
/*     */   private int confiabilidad_excelente;
/*     */   private int confiabilidad_buena;
/*     */   private int confiabilidad_regular;
/*     */   private float indice_oportunidad;
/*     */   private float indice_confiabilidad;
/*     */   private String nombres;
/*     */   private String apellidos;
/*     */   
/*  23 */   public void setCodigoEmpleado(int p) { this.codigo_empleado = p; }
/*     */ 
/*     */ 
/*     */   
/*  27 */   public void setSolicitudesRecibidas(int p) { this.solicitudes_recibidas = p; }
/*     */ 
/*     */ 
/*     */   
/*  31 */   public void setSolicitudesAtendidas(int p) { this.solicitudes_atendidas = p; }
/*     */ 
/*     */ 
/*     */   
/*  35 */   public void setSolicitudesNoAtendidas(int p) { this.solicitudes_noatendidas = p; }
/*     */ 
/*     */ 
/*     */   
/*  39 */   public void setSolicitudesEscaladas(int p) { this.solicitudes_escaladas = p; }
/*     */ 
/*     */ 
/*     */   
/*  43 */   public void setOportunidadExcelente(int p) { this.oportunidad_excelente = p; }
/*     */ 
/*     */ 
/*     */   
/*  47 */   public void setOportunidadBuena(int p) { this.oportunidad_buena = p; }
/*     */ 
/*     */ 
/*     */   
/*  51 */   public void setOportunidadRegular(int p) { this.oportunidad_regular = p; }
/*     */ 
/*     */ 
/*     */   
/*  55 */   public void setconfiabilidad_excelente(int p) { this.confiabilidad_excelente = p; }
/*     */ 
/*     */ 
/*     */   
/*  59 */   public void setConfiabilidadBuena(int p) { this.confiabilidad_buena = p; }
/*     */ 
/*     */ 
/*     */   
/*  63 */   public void setConfiabilidadRegular(int p) { this.confiabilidad_regular = p; }
/*     */ 
/*     */ 
/*     */   
/*  67 */   public void setIndiceOportunidad(float p) { this.indice_oportunidad = p; }
/*     */ 
/*     */ 
/*     */   
/*  71 */   public void setIndiceConfiabilidad(float p) { this.indice_confiabilidad = p; }
/*     */ 
/*     */ 
/*     */   
/*  75 */   public void setNombres(String p) { this.nombres = p; }
/*     */ 
/*     */ 
/*     */   
/*  79 */   public void setApellidos(String p) { this.apellidos = p; }
/*     */ 
/*     */ 
/*     */ 
/*     */   
/*  84 */   public int getCodigoEmpleado() { return this.codigo_empleado; }
/*     */ 
/*     */ 
/*     */   
/*  88 */   public int getSolicitudesRecibidas() { return this.solicitudes_recibidas; }
/*     */ 
/*     */ 
/*     */   
/*  92 */   public int getSolicitudesAtendidas() { return this.solicitudes_atendidas; }
/*     */ 
/*     */ 
/*     */   
/*  96 */   public int getSolicitudesNoAtendidas() { return this.solicitudes_noatendidas; }
/*     */ 
/*     */ 
/*     */   
/* 100 */   public int getSolicitudesEscaladas() { return this.solicitudes_escaladas; }
/*     */ 
/*     */ 
/*     */   
/* 104 */   public int getOportunidadExcelente() { return this.oportunidad_excelente; }
/*     */ 
/*     */ 
/*     */   
/* 108 */   public int getOportunidadBuena() { return this.oportunidad_buena; }
/*     */ 
/*     */ 
/*     */   
/* 112 */   public int getOportunidadRegular() { return this.oportunidad_regular; }
/*     */ 
/*     */ 
/*     */   
/* 116 */   public int getconfiabilidad_excelente() { return this.oportunidad_regular; }
/*     */ 
/*     */ 
/*     */   
/* 120 */   public int getConfiabilidadBuena() { return this.confiabilidad_buena; }
/*     */ 
/*     */ 
/*     */   
/* 124 */   public int getConfiabilidadRegular() { return this.confiabilidad_regular; }
/*     */ 
/*     */   
/*     */   public float getIndiceOportunidad() {
/* 128 */     int total = this.oportunidad_excelente + this.oportunidad_buena + this.oportunidad_regular;
/* 129 */     this.indice_oportunidad = 0.0F;
/* 130 */     if (total != 0) {
/* 131 */       this.indice_oportunidad = (this.oportunidad_excelente * ParametrosDTO.getFloat("porcentajeE") + this.oportunidad_buena * ParametrosDTO.getFloat("porcentajeB") + this.oportunidad_regular * ParametrosDTO.getFloat("porcentajeR")) / total;
/*     */     }
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 139 */     return this.indice_oportunidad;
/*     */   }
/*     */ 
/*     */   
/*     */   public float getIndiceConfiabilidad() {
/* 144 */     int total = this.confiabilidad_excelente + this.confiabilidad_buena + this.confiabilidad_regular;
/* 145 */     this.indice_confiabilidad = 0.0F;
/* 146 */     if (total != 0) {
/* 147 */       this.indice_confiabilidad = (this.confiabilidad_excelente * ParametrosDTO.getFloat("porcentajeE") + this.confiabilidad_buena * ParametrosDTO.getFloat("porcentajeB") + this.confiabilidad_regular * ParametrosDTO.getFloat("porcentajeR")) / total;
/*     */     }
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 153 */     return this.indice_confiabilidad;
/*     */   }
/*     */   
/*     */   public float getIndiceTotal() {
/* 157 */     int total = this.oportunidad_excelente + this.oportunidad_buena + this.oportunidad_regular;
/* 158 */     this.indice_oportunidad = 0.0F;
/* 159 */     if (total != 0) {
/* 160 */       this.indice_oportunidad = (this.oportunidad_excelente * ParametrosDTO.getFloat("porcentajeE") + this.oportunidad_buena * ParametrosDTO.getFloat("porcentajeB") + this.oportunidad_regular * ParametrosDTO.getFloat("porcentajeR")) / total;
/*     */     }
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 166 */     total = this.confiabilidad_excelente + this.confiabilidad_buena + this.confiabilidad_regular;
/* 167 */     this.indice_confiabilidad = 0.0F;
/* 168 */     if (total != 0) {
/* 169 */       this.indice_confiabilidad = (this.confiabilidad_excelente * ParametrosDTO.getFloat("porcentajeE") + this.confiabilidad_buena * ParametrosDTO.getFloat("porcentajeB") + this.confiabilidad_regular * ParametrosDTO.getFloat("porcentajeR")) / total;
/*     */     }
/*     */ 
/*     */ 
/*     */ 
/*     */     
/* 175 */     if (this.indice_oportunidad == 0.0F || this.indice_confiabilidad == 0.0F) return (this.indice_oportunidad + this.indice_confiabilidad) * 100.0F; 
/* 176 */     return this.indice_oportunidad * ParametrosDTO.getInt("porcentaje.oportunidad") + this.indice_confiabilidad * ParametrosDTO.getInt("porcentaje.confiabilidad");
/*     */   }
/*     */ 
/*     */   
/* 180 */   public String getNombres() { return this.nombres; }
/*     */ 
/*     */ 
/*     */   
/* 184 */   public String getApellidos() { return this.apellidos; }
/*     */ 
/*     */ 
/*     */   
/* 188 */   public String getNombre() { return this.apellidos + ' ' + this.nombres; }
/*     */ }


/* Location:              D:\Documents\ardulab\Clinica Chiquinquira\fuente\sinco.war!\WEB-INF\classes\sinco\business\AcumuladosPersonaDTO.class
 * Java compiler version: 7 (51.0)
 * JD-Core Version:       1.0.7
 */