import React from 'react';

export interface LanFaceGrinBeamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinBeamSolid(props: LanFaceGrinBeamSolidProps): React.ReactElement;
export default LanFaceGrinBeamSolid;
