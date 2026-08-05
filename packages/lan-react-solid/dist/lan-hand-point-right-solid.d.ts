import React from 'react';

export interface LanHandPointRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandPointRightSolid(props: LanHandPointRightSolidProps): React.ReactElement;
export default LanHandPointRightSolid;
