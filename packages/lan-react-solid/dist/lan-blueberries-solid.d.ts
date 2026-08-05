import React from 'react';

export interface LanBlueberriesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBlueberriesSolid(props: LanBlueberriesSolidProps): React.ReactElement;
export default LanBlueberriesSolid;
