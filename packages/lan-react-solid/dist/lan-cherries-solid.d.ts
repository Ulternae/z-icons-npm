import React from 'react';

export interface LanCherriesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCherriesSolid(props: LanCherriesSolidProps): React.ReactElement;
export default LanCherriesSolid;
