import React from 'react';

export interface LanArrowRightToArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowRightToArc(props: LanArrowRightToArcProps): React.ReactElement;
export default LanArrowRightToArc;
