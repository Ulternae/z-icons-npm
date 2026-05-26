import React from 'react';

export interface LanFileZipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileZipThin: React.FC<LanFileZipThinProps>;
export default LanFileZipThin;
