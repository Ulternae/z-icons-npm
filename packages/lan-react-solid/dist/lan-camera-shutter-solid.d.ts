import React from 'react';

export interface LanCameraShutterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraShutterSolid(props: LanCameraShutterSolidProps): React.ReactElement;
export default LanCameraShutterSolid;
