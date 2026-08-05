import React from 'react';

export interface LanCircleSterlingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSterlingSolid(props: LanCircleSterlingSolidProps): React.ReactElement;
export default LanCircleSterlingSolid;
