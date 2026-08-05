import React from 'react';

export interface LanSeatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSeatSolid(props: LanSeatSolidProps): React.ReactElement;
export default LanSeatSolid;
