import React from 'react';

export interface LanZSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanZSolid(props: LanZSolidProps): React.ReactElement;
export default LanZSolid;
