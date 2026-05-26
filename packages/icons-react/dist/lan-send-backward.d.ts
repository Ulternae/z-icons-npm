import React from 'react';

export interface LanSendBackwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSendBackward: React.FC<LanSendBackwardProps>;
export default LanSendBackward;
