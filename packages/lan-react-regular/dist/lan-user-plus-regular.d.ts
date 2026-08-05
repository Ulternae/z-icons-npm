import React from 'react';

export interface LanUserPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPlusRegular(props: LanUserPlusRegularProps): React.ReactElement;
export default LanUserPlusRegular;
