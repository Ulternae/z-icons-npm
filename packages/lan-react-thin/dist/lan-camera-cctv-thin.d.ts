import React from 'react';

export interface LanCameraCctvThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraCctvThin(props: LanCameraCctvThinProps): React.ReactElement;
export default LanCameraCctvThin;
