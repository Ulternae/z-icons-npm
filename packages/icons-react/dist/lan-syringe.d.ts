import React from 'react';

export interface LanSyringeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSyringe: React.FC<LanSyringeProps>;
export default LanSyringe;
