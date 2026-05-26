import React from 'react';

export interface LanAngleRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleRightThin: React.FC<LanAngleRightThinProps>;
export default LanAngleRightThin;
