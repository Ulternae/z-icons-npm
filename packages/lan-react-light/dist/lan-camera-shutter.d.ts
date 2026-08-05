import React from 'react';

export interface LanCameraShutterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraShutter(props: LanCameraShutterProps): React.ReactElement;
export default LanCameraShutter;
