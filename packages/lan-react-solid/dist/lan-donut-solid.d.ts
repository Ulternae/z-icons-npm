import React from 'react';

export interface LanDonutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDonutSolid(props: LanDonutSolidProps): React.ReactElement;
export default LanDonutSolid;
