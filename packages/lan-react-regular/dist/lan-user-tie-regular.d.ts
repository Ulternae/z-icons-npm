import React from 'react';

export interface LanUserTieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserTieRegular(props: LanUserTieRegularProps): React.ReactElement;
export default LanUserTieRegular;
