import React from 'react';

export interface LanDumpsterFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDumpsterFire: React.FC<LanDumpsterFireProps>;
export default LanDumpsterFire;
