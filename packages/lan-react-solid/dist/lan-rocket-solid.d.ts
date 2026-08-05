import React from 'react';

export interface LanRocketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRocketSolid(props: LanRocketSolidProps): React.ReactElement;
export default LanRocketSolid;
