import React from 'react';

export interface LanCassetteTapeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCassetteTapeRegular(props: LanCassetteTapeRegularProps): React.ReactElement;
export default LanCassetteTapeRegular;
