import React from 'react';

export interface LanCloverThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloverThin: React.FC<LanCloverThinProps>;
export default LanCloverThin;
