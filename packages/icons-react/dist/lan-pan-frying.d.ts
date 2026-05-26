import React from 'react';

export interface LanPanFryingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanFrying: React.FC<LanPanFryingProps>;
export default LanPanFrying;
