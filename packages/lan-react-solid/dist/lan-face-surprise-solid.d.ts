import React from 'react';

export interface LanFaceSurpriseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSurpriseSolid(props: LanFaceSurpriseSolidProps): React.ReactElement;
export default LanFaceSurpriseSolid;
