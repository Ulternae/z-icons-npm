import React from 'react';

export interface LanCassetteBetamaxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCassetteBetamaxThin(props: LanCassetteBetamaxThinProps): React.ReactElement;
export default LanCassetteBetamaxThin;
