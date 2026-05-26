import React from 'react';

export interface LanOwlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOwl: React.FC<LanOwlProps>;
export default LanOwl;
