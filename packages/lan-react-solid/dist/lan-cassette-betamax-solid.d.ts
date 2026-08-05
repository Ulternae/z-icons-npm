import React from 'react';

export interface LanCassetteBetamaxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCassetteBetamaxSolid(props: LanCassetteBetamaxSolidProps): React.ReactElement;
export default LanCassetteBetamaxSolid;
