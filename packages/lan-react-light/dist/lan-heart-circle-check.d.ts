import React from 'react';

export interface LanHeartCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartCircleCheck(props: LanHeartCircleCheckProps): React.ReactElement;
export default LanHeartCircleCheck;
