import React from 'react';

export interface LanFaceDisguiseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDisguiseSolid(props: LanFaceDisguiseSolidProps): React.ReactElement;
export default LanFaceDisguiseSolid;
