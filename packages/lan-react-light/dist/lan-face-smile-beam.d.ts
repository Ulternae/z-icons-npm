import React from 'react';

export interface LanFaceSmileBeamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmileBeam(props: LanFaceSmileBeamProps): React.ReactElement;
export default LanFaceSmileBeam;
