import React from 'react';

export interface NeoAngleDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAngleDown: React.FC<NeoAngleDownProps>;
export default NeoAngleDown;
