import React from 'react';

export interface LanStadiumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStadiumSolid(props: LanStadiumSolidProps): React.ReactElement;
export default LanStadiumSolid;
