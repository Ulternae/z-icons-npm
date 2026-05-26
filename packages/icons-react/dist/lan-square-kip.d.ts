import React from 'react';

export interface LanSquareKipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareKip: React.FC<LanSquareKipProps>;
export default LanSquareKip;
