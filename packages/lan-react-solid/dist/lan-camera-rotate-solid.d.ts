import React from 'react';

export interface LanCameraRotateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraRotateSolid(props: LanCameraRotateSolidProps): React.ReactElement;
export default LanCameraRotateSolid;
