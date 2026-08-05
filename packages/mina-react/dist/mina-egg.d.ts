import React from 'react';

export interface MinaEggProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaEgg(props: MinaEggProps): React.ReactElement;
export default MinaEgg;
