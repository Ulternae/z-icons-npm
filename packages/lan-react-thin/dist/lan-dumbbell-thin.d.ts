import React from 'react';

export interface LanDumbbellThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDumbbellThin(props: LanDumbbellThinProps): React.ReactElement;
export default LanDumbbellThin;
