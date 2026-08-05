import React from 'react';

export interface MinaSofaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSofa(props: MinaSofaProps): React.ReactElement;
export default MinaSofa;
