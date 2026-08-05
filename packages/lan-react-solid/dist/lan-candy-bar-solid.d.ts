import React from 'react';

export interface LanCandyBarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandyBarSolid(props: LanCandyBarSolidProps): React.ReactElement;
export default LanCandyBarSolid;
