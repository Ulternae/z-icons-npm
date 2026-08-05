import React from 'react';

export interface LanCameraHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraHomeSolid(props: LanCameraHomeSolidProps): React.ReactElement;
export default LanCameraHomeSolid;
