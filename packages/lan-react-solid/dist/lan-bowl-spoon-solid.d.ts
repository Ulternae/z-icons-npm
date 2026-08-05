import React from 'react';

export interface LanBowlSpoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlSpoonSolid(props: LanBowlSpoonSolidProps): React.ReactElement;
export default LanBowlSpoonSolid;
