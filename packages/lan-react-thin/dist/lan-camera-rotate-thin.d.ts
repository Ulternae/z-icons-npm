import React from 'react';

export interface LanCameraRotateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraRotateThin(props: LanCameraRotateThinProps): React.ReactElement;
export default LanCameraRotateThin;
