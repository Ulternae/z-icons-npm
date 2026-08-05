import React from 'react';

export interface LanUsdCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsdCircle(props: LanUsdCircleProps): React.ReactElement;
export default LanUsdCircle;
