import React from 'react';

export interface LanBowlSaladSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlSaladSolid(props: LanBowlSaladSolidProps): React.ReactElement;
export default LanBowlSaladSolid;
