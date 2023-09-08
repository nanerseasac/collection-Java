package map.Ordenacao;

import java.time.LocalDate;
import java.time.Month;
import java.util.*;

public class AgendaEventos {
    private Map<LocalDate, Evento> eventoMap;

    public AgendaEventos() {
        this.eventoMap = new HashMap<>();
    }

    public void adicionarEventos(LocalDate data, String nome, String atracao) {
        Evento evento = new Evento(nome, atracao);
        eventoMap.put(data, evento);
    }

    public void exibirAgenda() {
        Map<LocalDate, Evento> eventoTreeMap = new TreeMap<>(eventoMap);
        System.out.println(eventoTreeMap);
    }
    public void obterProximoEvento() {
//        Set<LocalDate> dataSet = eventoMap.keySet();
//        Collection<Evento> values = eventoMap.values();

        LocalDate dataAtual = LocalDate.now();
        Map<LocalDate, Evento> eventoTreeMap = new TreeMap<>(eventoMap);
        for(Map.Entry<LocalDate, Evento> entry: eventoTreeMap.entrySet()){
            if(entry.getKey().isEqual(dataAtual) || entry.getKey().isAfter(dataAtual)) {
                System.out.println("O proximo evento:" + entry.getValue() + " Acontecera na data " + entry.getKey());
                break;
            }
        }

    }

    public static void main(String[] args) {
        AgendaEventos agendaEventos = new AgendaEventos();

        agendaEventos.adicionarEventos(LocalDate.of(2023, Month.DECEMBER,1),"Ren", "EU MESMO");
        agendaEventos.adicionarEventos(LocalDate.of(2024, Month.JULY,1),"#$n", "MarsO");
        agendaEventos.adicionarEventos(LocalDate.of(2032, Month.JULY,1),"@en", "LolMO");

        agendaEventos.exibirAgenda();
       agendaEventos.obterProximoEvento();

    }
}
