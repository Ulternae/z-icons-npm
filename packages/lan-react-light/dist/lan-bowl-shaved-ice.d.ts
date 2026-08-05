import React from 'react';

export interface LanBowlShavedIceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlShavedIce(props: LanBowlShavedIceProps): React.ReactElement;
export default LanBowlShavedIce;
