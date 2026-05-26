import React from 'react';

export interface LanBoxOpenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxOpenRegular: React.FC<LanBoxOpenRegularProps>;
export default LanBoxOpenRegular;
