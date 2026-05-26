import React from 'react';

export interface LanDumpsterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDumpster: React.FC<LanDumpsterProps>;
export default LanDumpster;
