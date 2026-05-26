import React from 'react';

export interface LanLipsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLipsRegular: React.FC<LanLipsRegularProps>;
export default LanLipsRegular;
