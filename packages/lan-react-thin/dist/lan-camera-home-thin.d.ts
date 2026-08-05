import React from 'react';

export interface LanCameraHomeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraHomeThin(props: LanCameraHomeThinProps): React.ReactElement;
export default LanCameraHomeThin;
