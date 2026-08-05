import React from 'react';

export interface LanFaceSmileBeamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileBeamSolid(props: LanFaceSmileBeamSolidProps): React.ReactElement;
export default LanFaceSmileBeamSolid;
