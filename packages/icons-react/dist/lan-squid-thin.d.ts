import React from 'react';

export interface LanSquidThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquidThin: React.FC<LanSquidThinProps>;
export default LanSquidThin;
