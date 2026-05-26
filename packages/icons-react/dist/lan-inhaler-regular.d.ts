import React from 'react';

export interface LanInhalerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInhalerRegular: React.FC<LanInhalerRegularProps>;
export default LanInhalerRegular;
