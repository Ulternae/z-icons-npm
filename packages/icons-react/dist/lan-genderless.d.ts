import React from 'react';

export interface LanGenderlessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGenderless: React.FC<LanGenderlessProps>;
export default LanGenderless;
