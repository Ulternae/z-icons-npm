import React from 'react';

export interface LanSquareIRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareIRegular: React.FC<LanSquareIRegularProps>;
export default LanSquareIRegular;
