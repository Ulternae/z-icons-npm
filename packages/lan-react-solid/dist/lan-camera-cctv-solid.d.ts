import React from 'react';

export interface LanCameraCctvSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraCctvSolid(props: LanCameraCctvSolidProps): React.ReactElement;
export default LanCameraCctvSolid;
