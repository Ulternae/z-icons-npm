import React from 'react';

export interface LanGarlicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarlicSolid(props: LanGarlicSolidProps): React.ReactElement;
export default LanGarlicSolid;
