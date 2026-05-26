import React from 'react';

export interface LanGarageEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageEmptyThin: React.FC<LanGarageEmptyThinProps>;
export default LanGarageEmptyThin;
