import React from 'react';

export interface LanArrowLeftFromArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowLeftFromArc(props: LanArrowLeftFromArcProps): React.ReactElement;
export default LanArrowLeftFromArc;
