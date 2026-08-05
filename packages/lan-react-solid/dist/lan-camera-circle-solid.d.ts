import React from 'react';

export interface LanCameraCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraCircleSolid(props: LanCameraCircleSolidProps): React.ReactElement;
export default LanCameraCircleSolid;
