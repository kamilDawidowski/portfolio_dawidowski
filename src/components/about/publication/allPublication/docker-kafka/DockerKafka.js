import React from 'react';
import {Box, Typography} from "@mui/material";
import logo from "./img/Docker-kamil.png";
import KafkaSvg from "./KafkaSvg";

function DockerKafka(props) {
    return (
        <Box style={{color:'white' ,padding:2}}>
            <Typography variant={'h3'} style={{textAlign:'center'}}>The impact of docker on the performance of Kafka connect</Typography>
            {/*<KafkaSvg/>*/}
            <img className='p-4'

                width={'100%'}
                src={logo}
                loading="lazy"
            />
            <div className='container'>
                <Typography paragraph variant={'h4'} style={{marginLeft:2}}>1.	Wstęp</Typography>
                <Typography variant={'body1'} style={{marginBottom:50}}>Wykorzystanie konteneryzacji w procesie wdrażania staje się coraz bardziej popularnym rozwiązaniem. Pozwala to na szybkie uruchomienie danego produktu za pomocą kilku komend wiersza poleceń. Jednakże należy zadać sobie pytanie odnośnie wpływu konteneryzacji na działanie i wydajność tego procesu, a także czy warto używać konteneryzacji w środowisku produkcyjnym. Przedmiotem badania jest proces replikacji danych z bazy źródłowej PostgreSQL do bazy docelowej PostgreSQL przy użyciu Kafki Connect . Wszystkie zachodzące zmiany będą monitorowane oprogramowaniem Prometheus  oraz Grafana .  Następnie dane zostaną poddane analizie w celu wyciągnięcia wniosków.</Typography>


                <Typography paragraph variant={'h4'} style={{marginLeft:2}}>2.	Docker</Typography>
                <Typography variant={'body1'} style={{marginBottom:50}}>Docker działa na systemie operacyjnym, a jego instalacja wymaga połączenia z siecią w celu pobrania niezbędnych składników. Początkowe ustawienia umożliwiają tylko użytkownikowi  root na wydawanie poleceń, co znacząco poprawia bezpieczeństwo. Uruchomianie  kontenera odbywa się przy pomocy polecenia docker run, w tym momencie docker engine sprawdza czy dany obraz znajduje się w lokalnym rejestrze i uruchamia go w innym przypadku przeszukuje repozytorium Docker Hub  w celu odnalezienia danego obrazu ( lub innego wskazanego repozytorium ) i pobrania. W przeciwnym wypadku, gdy obraz nie zostanie znaleziony zwrócony zostanie komunikat o błędzie. Pozwala to przechowywać obrazy w zdalnych repozytoriach, a także sprawnie zarządzać wersjami oprogramowania. Cały ten proces sprawia, że nie potrzebujemy fizycznie spakowanych aplikacji na środowisku produkcyjnym do uruchomienia usługi.  Ważną cechą jest to, że działające kontenery możemy w pełni kontrolować i mieć do nich dostęp.
                    Dużym ułatwieniem jest budowanie plików YAML tzw. docker-compose, które pozwalają zarządzanie większą ilością kontenerów w jednym miejscu. Całe uruchomienie środowiska składającego się z wielu kontenerów odbywa się przy użyciu komendy docker-compose up. Użytkownik ma możliwość także definiowania zmiennych środowiskowych, które mogą być dowolnie zmieniane  zależnie od potrzeb i wymagań. Przykładowa architektura konteneryzacji wielu aplikacji  znajduję się na Rysunek.1 .
                </Typography>

                {/*TODO IMAGE*/}

                <Typography variant={'body1'} style={{marginBottom:50}}></Typography>


                <Typography paragraph variant={'h4'} style={{marginLeft:2}}>3.	Kafka Connect</Typography>
                <Typography variant={'body1'} style={{marginBottom:50}}>Kafka Connect jest narzędziem do skalowalnego przesyłania danych między Apache Kafka oraz innymi systemami. W Replikacji danych tworzy się łączniki, które odpowiedzialne są za przechwytywanie zmian w bazie źródłowej i wysyłanie do Kafki przy pomocy topików. Tam dane są przechowywane w brokerze, który stanowi niezawodny bufor między poszczególnymi etapami replikacji danych. Zaletą takiego rozwiązania jest fakt, że w momencie kiedy nasz łącznik docelowy przestanie odbierać dane, to będą nadal dostępne na brokerze. Zapisuje on informacje w postaci tzw. offsetu odnośnie ostatnio odczytanego rekordu. W momencie przywrócenia sprawności łącznika docelowego rekordy będą transportowane dokładnie od ostatniego miejsca. Trzeba tutaj wspomnieć, że dana sytuacje nie będzie wpływała na pracę łącznika źródłowego, który nie przerwie swojej pracy i nadal będzie przesyłał dane do brokera Kafki. Rolą łącznika z Kafki jest pobieranie danych z topiców i umieszczanie je w odpowiednich tabelach bazy docelowej. Taki zestaw konfiguracji obu łączników jest transportowany bezpośrednio do Kafki Connect przy użyciu protokołu http. Przykładowa konfiguracja dla bazy źródłowej znajduje się  na Rysunku 2.</Typography>


                <Typography paragraph variant={'h4'} style={{marginLeft:2}}>4.	Konteneryzacja rozwiązania</Typography>
                <Typography variant={'body1'} style={{marginBottom:50}}></Typography>


                <Typography paragraph variant={'h4'} style={{marginLeft:2}}>5.	Scenariusz testowy</Typography>
                <Typography variant={'body1'} style={{marginBottom:50}}></Typography>


                <Typography paragraph variant={'h4'} style={{marginLeft:2}}>6.	Wyniki</Typography>

                <Typography paragraph variant={'h4'} style={{marginLeft:2}}>7.	Wnioski</Typography>

            </div>



        </Box>
    );
}

export default DockerKafka;
