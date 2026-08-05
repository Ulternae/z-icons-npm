import React from 'react';

export interface LanBeerMugEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBeerMugEmptySolid(props: LanBeerMugEmptySolidProps): React.ReactElement;
export default LanBeerMugEmptySolid;
