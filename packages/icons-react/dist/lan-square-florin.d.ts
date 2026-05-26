import React from 'react';

export interface LanSquareFlorinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareFlorin: React.FC<LanSquareFlorinProps>;
export default LanSquareFlorin;
