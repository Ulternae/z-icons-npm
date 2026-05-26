import React from 'react';

export interface LanDumpsterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDumpsterSolid: React.FC<LanDumpsterSolidProps>;
export default LanDumpsterSolid;
