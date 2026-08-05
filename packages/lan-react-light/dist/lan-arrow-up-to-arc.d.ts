import React from 'react';

export interface LanArrowUpToArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowUpToArc(props: LanArrowUpToArcProps): React.ReactElement;
export default LanArrowUpToArc;
