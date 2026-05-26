import React from 'react';

export interface LanVanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVan: React.FC<LanVanProps>;
export default LanVan;
