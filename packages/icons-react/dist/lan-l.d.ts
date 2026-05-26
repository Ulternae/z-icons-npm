import React from 'react';

export interface LanLProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanL: React.FC<LanLProps>;
export default LanL;
