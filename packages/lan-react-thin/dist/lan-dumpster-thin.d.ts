import React from 'react';

export interface LanDumpsterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDumpsterThin(props: LanDumpsterThinProps): React.ReactElement;
export default LanDumpsterThin;
