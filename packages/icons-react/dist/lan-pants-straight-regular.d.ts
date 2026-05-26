import React from 'react';

export interface LanPantsStraightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPantsStraightRegular: React.FC<LanPantsStraightRegularProps>;
export default LanPantsStraightRegular;
