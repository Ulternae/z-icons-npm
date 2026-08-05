import React from 'react';

export interface LanDumpsterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDumpster(props: LanDumpsterProps): React.ReactElement;
export default LanDumpster;
