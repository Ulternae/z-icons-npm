import React from 'react';

export interface LanAwardSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAwardSimple: React.FC<LanAwardSimpleProps>;
export default LanAwardSimple;
