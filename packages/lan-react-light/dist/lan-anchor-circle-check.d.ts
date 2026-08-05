import React from 'react';

export interface LanAnchorCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnchorCircleCheck(props: LanAnchorCircleCheckProps): React.ReactElement;
export default LanAnchorCircleCheck;
