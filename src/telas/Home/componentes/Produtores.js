import React, { useEffect}from 'react';
import { Text } from 'react-native';

import { carregaProdutores } from '../../../servicos/carregaDados';

export default function produtores () {
    useEffect(() => {
        const retorno = carregaProdutores(); 
        console.log(returno); 
    }, []);

    return <Text> Produtores </Text>
     
} 