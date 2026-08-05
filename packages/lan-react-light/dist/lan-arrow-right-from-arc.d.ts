import React from 'react';

export interface LanArrowRightFromArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowRightFromArc(props: LanArrowRightFromArcProps): React.ReactElement;
export default LanArrowRightFromArc;
