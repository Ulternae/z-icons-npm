import React from 'react';

export interface LanMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMoonSolid(props: LanMoonSolidProps): React.ReactElement;
export default LanMoonSolid;
