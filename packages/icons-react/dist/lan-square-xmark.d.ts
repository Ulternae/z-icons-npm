import React from 'react';

export interface LanSquareXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareXmark: React.FC<LanSquareXmarkProps>;
export default LanSquareXmark;
