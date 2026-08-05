import React from 'react';

export interface LanDresserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDresserSolid(props: LanDresserSolidProps): React.ReactElement;
export default LanDresserSolid;
