import React from 'react';

export interface LanPlusMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusMinusSolid(props: LanPlusMinusSolidProps): React.ReactElement;
export default LanPlusMinusSolid;
