import React from 'react';

export interface LanSquareColonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareColon: React.FC<LanSquareColonProps>;
export default LanSquareColon;
