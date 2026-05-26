import React from 'react';

export interface LanTrilliumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrilliumThin: React.FC<LanTrilliumThinProps>;
export default LanTrilliumThin;
