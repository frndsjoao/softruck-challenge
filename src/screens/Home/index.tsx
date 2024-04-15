import { FlatList } from 'react-native';
import response from '../../../frontend_data_gps.json';
import Header from '../../components/Header';
import Input from '../../components/Input';
import VehicleCard from '../../components/VehicleCard';
import { Category, CategoryTitle, Container, EmptyList } from './styles';

// Sugestão: o veículo ser retornado como array, podendo um usuário ter mais de um veículo a ser monitorado.
const VEHICLES = [response.vehicle]

export default function HomeScreen() {
  return (
    <>
      <Header />

      <Container>
        <Input icon={{ name: 'search', size: 28 }} placeholder="Buscar veículos" />

        <Category>
          <CategoryTitle>Vehicles</CategoryTitle>
          <FlatList
            data={VEHICLES}
            keyExtractor={(item) => item.plate}
            renderItem={({ item }) => <VehicleCard data={item} />}
            contentContainerStyle={{ paddingBottom: 120 }}
            ListEmptyComponent={() => <EmptyList>Você não possui veículos cadastrados.</EmptyList>}
          />
        </Category>
      </Container>
    </>
  )
}