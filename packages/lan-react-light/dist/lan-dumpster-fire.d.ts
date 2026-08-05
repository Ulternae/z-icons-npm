import React from 'react';

export interface LanDumpsterFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDumpsterFire(props: LanDumpsterFireProps): React.ReactElement;
export default LanDumpsterFire;
