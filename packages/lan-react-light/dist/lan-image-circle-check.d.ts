import React from 'react';

export interface LanImageCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageCircleCheck(props: LanImageCircleCheckProps): React.ReactElement;
export default LanImageCircleCheck;
