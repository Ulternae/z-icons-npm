import React from 'react';

export interface LanBowlScoopsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlScoopsSolid(props: LanBowlScoopsSolidProps): React.ReactElement;
export default LanBowlScoopsSolid;
