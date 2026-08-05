import React from 'react';

export interface LanZzzSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanZzzSolid(props: LanZzzSolidProps): React.ReactElement;
export default LanZzzSolid;
