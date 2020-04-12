import React, { useState} from 'react';
import { AiOutlineEllipsis, AiFillEye, AiFillDelete } from 'react-icons/ai'
import { FaPencilAlt } from 'react-icons/fa';

import { Container, Badge, OptionsList } from './styles';



export default function Actions() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <AiOutlineEllipsis color="#7159c1" size={25} />
      </Badge>

      <OptionsList visible={visible}>
        <button>
          <FaPencilAlt color="#0000FF" size={17} />
             Vizualizar
        </button>
        <button>
          <AiFillDelete color="	#FF0000" size={17} />
             Cancelar encomenda
        </button>
      </OptionsList>
    </Container>
  );
}
