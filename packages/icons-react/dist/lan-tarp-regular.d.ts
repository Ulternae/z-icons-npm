import React from 'react';

export interface LanTarpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTarpRegular: React.FC<LanTarpRegularProps>;
export default LanTarpRegular;
