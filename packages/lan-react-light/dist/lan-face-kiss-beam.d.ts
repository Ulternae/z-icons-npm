import React from 'react';

export interface LanFaceKissBeamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceKissBeam(props: LanFaceKissBeamProps): React.ReactElement;
export default LanFaceKissBeam;
