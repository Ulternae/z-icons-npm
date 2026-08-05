import React from 'react';

export interface LanRaccoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRaccoonSolid(props: LanRaccoonSolidProps): React.ReactElement;
export default LanRaccoonSolid;
