import React from 'react';

export interface LanMeatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMeatSolid(props: LanMeatSolidProps): React.ReactElement;
export default LanMeatSolid;
