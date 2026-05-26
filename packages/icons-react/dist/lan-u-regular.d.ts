import React from 'react';

export interface LanURegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanURegular: React.FC<LanURegularProps>;
export default LanURegular;
