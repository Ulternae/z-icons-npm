import React from 'react';

export interface LanFaceLaughBeamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLaughBeam(props: LanFaceLaughBeamProps): React.ReactElement;
export default LanFaceLaughBeam;
