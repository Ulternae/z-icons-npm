import React from 'react';

export interface LanSquareAmpersandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareAmpersand: React.FC<LanSquareAmpersandProps>;
export default LanSquareAmpersand;
