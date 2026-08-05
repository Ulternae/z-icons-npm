import React from 'react';

export interface LanFaceDisappointedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDisappointedSolid(props: LanFaceDisappointedSolidProps): React.ReactElement;
export default LanFaceDisappointedSolid;
