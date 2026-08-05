import React from 'react';

export interface LanCameraCircleEllipsisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraCircleEllipsisSolid(props: LanCameraCircleEllipsisSolidProps): React.ReactElement;
export default LanCameraCircleEllipsisSolid;
