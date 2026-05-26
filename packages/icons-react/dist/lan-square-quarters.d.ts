import React from 'react';

export interface LanSquareQuartersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareQuarters: React.FC<LanSquareQuartersProps>;
export default LanSquareQuarters;
