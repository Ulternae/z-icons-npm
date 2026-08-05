import React from 'react';

export interface LanFlowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlowerSolid(props: LanFlowerSolidProps): React.ReactElement;
export default LanFlowerSolid;
