import React from 'react';

export interface LanArchwayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArchwayRegular: React.FC<LanArchwayRegularProps>;
export default LanArchwayRegular;
