import React from 'react';

export interface LanArrowUpFromArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowUpFromArc(props: LanArrowUpFromArcProps): React.ReactElement;
export default LanArrowUpFromArc;
