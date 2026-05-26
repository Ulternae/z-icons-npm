import React from 'react';

export interface LanFileAiffThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileAiffThin: React.FC<LanFileAiffThinProps>;
export default LanFileAiffThin;
