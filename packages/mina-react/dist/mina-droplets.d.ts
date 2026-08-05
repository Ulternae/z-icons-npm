import React from 'react';

export interface MinaDropletsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDroplets(props: MinaDropletsProps): React.ReactElement;
export default MinaDroplets;
