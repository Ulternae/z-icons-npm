import React from 'react';

export interface LanLeoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeoRegular: React.FC<LanLeoRegularProps>;
export default LanLeoRegular;
