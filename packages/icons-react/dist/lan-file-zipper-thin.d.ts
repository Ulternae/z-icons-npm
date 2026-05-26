import React from 'react';

export interface LanFileZipperThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileZipperThin: React.FC<LanFileZipperThinProps>;
export default LanFileZipperThin;
