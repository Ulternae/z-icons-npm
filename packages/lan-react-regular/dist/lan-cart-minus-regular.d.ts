import React from 'react';

export interface LanCartMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartMinusRegular(props: LanCartMinusRegularProps): React.ReactElement;
export default LanCartMinusRegular;
