import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  static getMedicos() {
    throw new Error("Method not implemented.");
  }

  private API_URL = 'https://medicos-progweb.herokuapp.com'

  constructor(private httpClient: HttpClient) { }

  public getMedicos() {
    return this.httpClient.get<string[]>('${this.API_URL}/medicos');
  }

  public postPaciente(medicoResponsavel: String, nomePaciente: String, tipoSanguineo: String) {
    this.httpClient.post(this.API_URL, {
      "MedicoResponsavel": medicoResponsavel,
      "NomePaciente": nomePaciente,
      "TipoSanguineo": tipoSanguineo
    });
  }
}
