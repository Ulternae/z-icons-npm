import React from 'react';

export interface LanHeartCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartCircleMinus(props: LanHeartCircleMinusProps): React.ReactElement;
export default LanHeartCircleMinus;
