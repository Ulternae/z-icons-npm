import React from 'react';

export interface LanLiraSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLiraSignRegular: React.FC<LanLiraSignRegularProps>;
export default LanLiraSignRegular;
