import React from 'react';

export interface LanLungsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLungsRegular: React.FC<LanLungsRegularProps>;
export default LanLungsRegular;
