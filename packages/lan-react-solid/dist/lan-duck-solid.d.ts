import React from 'react';

export interface LanDuckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDuckSolid(props: LanDuckSolidProps): React.ReactElement;
export default LanDuckSolid;
