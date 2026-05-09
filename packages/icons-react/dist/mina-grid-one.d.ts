import React from 'react';

export interface MinaGridOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaGridOne: React.FC<MinaGridOneProps>;
export default MinaGridOne;
