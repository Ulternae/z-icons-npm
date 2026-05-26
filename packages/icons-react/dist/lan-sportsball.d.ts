import React from 'react';

export interface LanSportsballProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSportsball: React.FC<LanSportsballProps>;
export default LanSportsball;
