import React from 'react';

export interface LanArrowDownFromArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowDownFromArc(props: LanArrowDownFromArcProps): React.ReactElement;
export default LanArrowDownFromArc;
