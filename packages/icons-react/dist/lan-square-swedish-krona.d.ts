import React from 'react';

export interface LanSquareSwedishKronaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareSwedishKrona: React.FC<LanSquareSwedishKronaProps>;
export default LanSquareSwedishKrona;
