import React from 'react';

export interface LanStaplerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStaplerSolid(props: LanStaplerSolidProps): React.ReactElement;
export default LanStaplerSolid;
