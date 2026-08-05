import React from 'react';

export interface LanCakeCandlesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCakeCandlesSolid(props: LanCakeCandlesSolidProps): React.ReactElement;
export default LanCakeCandlesSolid;
