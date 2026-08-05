import React from 'react';

export interface LanBowlSoftServeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlSoftServeSolid(props: LanBowlSoftServeSolidProps): React.ReactElement;
export default LanBowlSoftServeSolid;
