import React from 'react';

export interface LanLeafSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLeafSolid(props: LanLeafSolidProps): React.ReactElement;
export default LanLeafSolid;
