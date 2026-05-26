import React from 'react';

export interface LanPopsicleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPopsicle: React.FC<LanPopsicleProps>;
export default LanPopsicle;
