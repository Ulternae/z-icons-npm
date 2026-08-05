import React from 'react';

export interface LanDumpsterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDumpsterSolid(props: LanDumpsterSolidProps): React.ReactElement;
export default LanDumpsterSolid;
