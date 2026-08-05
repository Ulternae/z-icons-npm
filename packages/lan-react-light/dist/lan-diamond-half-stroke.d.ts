import React from 'react';

export interface LanDiamondHalfStrokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiamondHalfStroke(props: LanDiamondHalfStrokeProps): React.ReactElement;
export default LanDiamondHalfStroke;
