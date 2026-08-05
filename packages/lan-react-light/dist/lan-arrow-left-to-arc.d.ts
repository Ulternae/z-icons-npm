import React from 'react';

export interface LanArrowLeftToArcProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanArrowLeftToArc(props: LanArrowLeftToArcProps): React.ReactElement;
export default LanArrowLeftToArc;
