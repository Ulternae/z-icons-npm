import React from 'react';

export interface LanFaceGrinBeamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinBeam(props: LanFaceGrinBeamProps): React.ReactElement;
export default LanFaceGrinBeam;
