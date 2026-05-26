import React from 'react';

export interface LanGenderlessRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGenderlessRegular: React.FC<LanGenderlessRegularProps>;
export default LanGenderlessRegular;
