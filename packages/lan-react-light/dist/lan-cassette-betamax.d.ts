import React from 'react';

export interface LanCassetteBetamaxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCassetteBetamax(props: LanCassetteBetamaxProps): React.ReactElement;
export default LanCassetteBetamax;
