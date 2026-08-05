import React from 'react';

export interface LanBeerMugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBeerMugSolid(props: LanBeerMugSolidProps): React.ReactElement;
export default LanBeerMugSolid;
