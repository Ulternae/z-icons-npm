import React from 'react';

export interface LanGarageOpenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageOpenThin: React.FC<LanGarageOpenThinProps>;
export default LanGarageOpenThin;
