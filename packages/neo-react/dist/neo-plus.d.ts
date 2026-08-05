import React from 'react';

export interface NeoPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPlus(props: NeoPlusProps): React.ReactElement;
export default NeoPlus;
