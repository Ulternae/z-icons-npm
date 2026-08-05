import React from 'react';

export interface LanCameraShutterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraShutterRegular(props: LanCameraShutterRegularProps): React.ReactElement;
export default LanCameraShutterRegular;
