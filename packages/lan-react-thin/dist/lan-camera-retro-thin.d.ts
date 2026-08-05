import React from 'react';

export interface LanCameraRetroThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraRetroThin(props: LanCameraRetroThinProps): React.ReactElement;
export default LanCameraRetroThin;
