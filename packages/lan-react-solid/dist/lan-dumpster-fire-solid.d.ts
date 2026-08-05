import React from 'react';

export interface LanDumpsterFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDumpsterFireSolid(props: LanDumpsterFireSolidProps): React.ReactElement;
export default LanDumpsterFireSolid;
