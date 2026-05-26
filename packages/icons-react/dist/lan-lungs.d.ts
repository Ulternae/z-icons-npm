import React from 'react';

export interface LanLungsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLungs: React.FC<LanLungsProps>;
export default LanLungs;
