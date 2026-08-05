import React from 'react';

export interface LanCustardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCustardRegular(props: LanCustardRegularProps): React.ReactElement;
export default LanCustardRegular;
