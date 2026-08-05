import React from 'react';

export interface LanFillDripSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFillDripSolid(props: LanFillDripSolidProps): React.ReactElement;
export default LanFillDripSolid;
