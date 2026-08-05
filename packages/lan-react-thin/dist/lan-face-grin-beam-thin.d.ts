import React from 'react';

export interface LanFaceGrinBeamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinBeamThin(props: LanFaceGrinBeamThinProps): React.ReactElement;
export default LanFaceGrinBeamThin;
