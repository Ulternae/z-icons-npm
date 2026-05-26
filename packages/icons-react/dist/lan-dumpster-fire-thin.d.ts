import React from 'react';

export interface LanDumpsterFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDumpsterFireThin: React.FC<LanDumpsterFireThinProps>;
export default LanDumpsterFireThin;
