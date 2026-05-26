import React from 'react';

export interface LanBookDeadThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookDeadThin: React.FC<LanBookDeadThinProps>;
export default LanBookDeadThin;
