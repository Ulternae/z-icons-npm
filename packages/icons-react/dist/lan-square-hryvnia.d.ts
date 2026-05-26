import React from 'react';

export interface LanSquareHryvniaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHryvnia: React.FC<LanSquareHryvniaProps>;
export default LanSquareHryvnia;
