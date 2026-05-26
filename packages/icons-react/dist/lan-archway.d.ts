import React from 'react';

export interface LanArchwayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArchway: React.FC<LanArchwayProps>;
export default LanArchway;
