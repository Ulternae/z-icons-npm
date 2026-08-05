import React from 'react';

export interface LanCameraAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCameraAltSolid(props: LanCameraAltSolidProps): React.ReactElement;
export default LanCameraAltSolid;
