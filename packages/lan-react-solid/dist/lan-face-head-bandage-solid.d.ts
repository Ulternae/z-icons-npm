import React from 'react';

export interface LanFaceHeadBandageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHeadBandageSolid(props: LanFaceHeadBandageSolidProps): React.ReactElement;
export default LanFaceHeadBandageSolid;
