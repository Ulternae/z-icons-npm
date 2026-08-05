import React from 'react';

export interface LanHollyBerrySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHollyBerrySolid(props: LanHollyBerrySolidProps): React.ReactElement;
export default LanHollyBerrySolid;
