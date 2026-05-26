import React from 'react';

export interface LanClarinetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClarinetThin: React.FC<LanClarinetThinProps>;
export default LanClarinetThin;
