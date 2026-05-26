import React from 'react';

export interface LanSendBackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSendBackThin: React.FC<LanSendBackThinProps>;
export default LanSendBackThin;
