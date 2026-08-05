import React from 'react';

export interface LanFaceKissBeamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceKissBeamSolid(props: LanFaceKissBeamSolidProps): React.ReactElement;
export default LanFaceKissBeamSolid;
