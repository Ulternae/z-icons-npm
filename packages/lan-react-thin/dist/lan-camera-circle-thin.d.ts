import React from 'react';

export interface LanCameraCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraCircleThin(props: LanCameraCircleThinProps): React.ReactElement;
export default LanCameraCircleThin;
