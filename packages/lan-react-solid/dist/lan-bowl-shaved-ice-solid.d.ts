import React from 'react';

export interface LanBowlShavedIceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlShavedIceSolid(props: LanBowlShavedIceSolidProps): React.ReactElement;
export default LanBowlShavedIceSolid;
