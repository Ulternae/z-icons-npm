import React from 'react';

export interface LanCartPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCartPlusRegular(props: LanCartPlusRegularProps): React.ReactElement;
export default LanCartPlusRegular;
