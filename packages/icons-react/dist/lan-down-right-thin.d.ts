import React from 'react';

export interface LanDownRightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownRightThin: React.FC<LanDownRightThinProps>;
export default LanDownRightThin;
