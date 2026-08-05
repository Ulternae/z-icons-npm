import React from 'react';

export interface LanCameraShutterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraShutterThin(props: LanCameraShutterThinProps): React.ReactElement;
export default LanCameraShutterThin;
