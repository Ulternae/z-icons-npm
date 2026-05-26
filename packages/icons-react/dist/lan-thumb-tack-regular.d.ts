import React from 'react';

export interface LanThumbTackRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbTackRegular: React.FC<LanThumbTackRegularProps>;
export default LanThumbTackRegular;
