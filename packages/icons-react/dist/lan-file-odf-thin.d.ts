import React from 'react';

export interface LanFileOdfThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileOdfThin: React.FC<LanFileOdfThinProps>;
export default LanFileOdfThin;
