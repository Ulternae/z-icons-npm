import React from 'react';

export interface LanHandPointLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointLeftSolid(props: LanHandPointLeftSolidProps): React.ReactElement;
export default LanHandPointLeftSolid;
