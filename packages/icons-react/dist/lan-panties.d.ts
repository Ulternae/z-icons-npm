import React from 'react';

export interface LanPantiesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanties: React.FC<LanPantiesProps>;
export default LanPanties;
