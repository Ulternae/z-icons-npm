import React from 'react';

export interface LanAnchorCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAnchorCircleCheckSolid(props: LanAnchorCircleCheckSolidProps): React.ReactElement;
export default LanAnchorCircleCheckSolid;
