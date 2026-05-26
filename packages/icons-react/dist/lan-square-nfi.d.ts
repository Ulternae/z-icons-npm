import React from 'react';

export interface LanSquareNfiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareNfi: React.FC<LanSquareNfiProps>;
export default LanSquareNfi;
