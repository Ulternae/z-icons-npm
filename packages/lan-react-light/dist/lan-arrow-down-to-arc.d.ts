import React from 'react';

export interface LanArrowDownToArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowDownToArc(props: LanArrowDownToArcProps): React.ReactElement;
export default LanArrowDownToArc;
