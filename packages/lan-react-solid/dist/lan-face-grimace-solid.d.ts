import React from 'react';

export interface LanFaceGrimaceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrimaceSolid(props: LanFaceGrimaceSolidProps): React.ReactElement;
export default LanFaceGrimaceSolid;
