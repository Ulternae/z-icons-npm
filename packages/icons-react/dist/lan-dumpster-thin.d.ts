import React from 'react';

export interface LanDumpsterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDumpsterThin: React.FC<LanDumpsterThinProps>;
export default LanDumpsterThin;
