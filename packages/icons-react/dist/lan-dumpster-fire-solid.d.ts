import React from 'react';

export interface LanDumpsterFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDumpsterFireSolid: React.FC<LanDumpsterFireSolidProps>;
export default LanDumpsterFireSolid;
