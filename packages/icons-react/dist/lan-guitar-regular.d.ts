import React from 'react';

export interface LanGuitarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuitarRegular: React.FC<LanGuitarRegularProps>;
export default LanGuitarRegular;
