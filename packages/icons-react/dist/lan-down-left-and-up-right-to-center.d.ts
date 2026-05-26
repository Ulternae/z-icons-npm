import React from 'react';

export interface LanDownLeftAndUpRightToCenterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownLeftAndUpRightToCenter: React.FC<LanDownLeftAndUpRightToCenterProps>;
export default LanDownLeftAndUpRightToCenter;
