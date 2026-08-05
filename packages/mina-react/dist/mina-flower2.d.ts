import React from 'react';

export interface MinaFlower2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlower2(props: MinaFlower2Props): React.ReactElement;
export default MinaFlower2;
