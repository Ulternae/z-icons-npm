import React from 'react';

export interface LanCameraRetroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraRetroSolid(props: LanCameraRetroSolidProps): React.ReactElement;
export default LanCameraRetroSolid;
