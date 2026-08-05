import React from 'react';

export interface LanCameraWebSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraWebSolid(props: LanCameraWebSolidProps): React.ReactElement;
export default LanCameraWebSolid;
