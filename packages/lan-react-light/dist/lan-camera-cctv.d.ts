import React from 'react';

export interface LanCameraCctvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraCctv(props: LanCameraCctvProps): React.ReactElement;
export default LanCameraCctv;
