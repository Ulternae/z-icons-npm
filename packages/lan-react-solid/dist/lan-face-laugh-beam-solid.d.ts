import React from 'react';

export interface LanFaceLaughBeamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceLaughBeamSolid(props: LanFaceLaughBeamSolidProps): React.ReactElement;
export default LanFaceLaughBeamSolid;
