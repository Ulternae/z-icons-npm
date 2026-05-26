import React from 'react';

export interface LanSendBackwardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSendBackwardThin: React.FC<LanSendBackwardThinProps>;
export default LanSendBackwardThin;
