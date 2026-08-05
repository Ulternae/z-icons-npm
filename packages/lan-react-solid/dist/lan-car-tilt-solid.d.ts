import React from 'react';

export interface LanCarTiltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarTiltSolid(props: LanCarTiltSolidProps): React.ReactElement;
export default LanCarTiltSolid;
