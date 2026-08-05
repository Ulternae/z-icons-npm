import React from 'react';

export interface LanFacePensiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePensiveSolid(props: LanFacePensiveSolidProps): React.ReactElement;
export default LanFacePensiveSolid;
