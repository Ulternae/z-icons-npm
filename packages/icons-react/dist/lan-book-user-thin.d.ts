import React from 'react';

export interface LanBookUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookUserThin: React.FC<LanBookUserThinProps>;
export default LanBookUserThin;
