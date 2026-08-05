import React from 'react';

export interface LanDumpsterFireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDumpsterFireThin(props: LanDumpsterFireThinProps): React.ReactElement;
export default LanDumpsterFireThin;
