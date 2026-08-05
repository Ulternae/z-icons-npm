import React from 'react';

export interface LanBowlHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlHotSolid(props: LanBowlHotSolidProps): React.ReactElement;
export default LanBowlHotSolid;
