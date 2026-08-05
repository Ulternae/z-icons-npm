import React from 'react';

export interface MinaFlowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlower(props: MinaFlowerProps): React.ReactElement;
export default MinaFlower;
