import React from 'react';

export interface LanLessThanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLessThan: React.FC<LanLessThanProps>;
export default LanLessThan;
