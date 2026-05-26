import React from 'react';

export interface LanWreathRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWreathRegular: React.FC<LanWreathRegularProps>;
export default LanWreathRegular;
