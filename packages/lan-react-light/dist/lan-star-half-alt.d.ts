import React from 'react';

export interface LanStarHalfAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarHalfAlt(props: LanStarHalfAltProps): React.ReactElement;
export default LanStarHalfAlt;
