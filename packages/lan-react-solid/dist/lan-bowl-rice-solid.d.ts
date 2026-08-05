import React from 'react';

export interface LanBowlRiceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlRiceSolid(props: LanBowlRiceSolidProps): React.ReactElement;
export default LanBowlRiceSolid;
