import React from 'react';

export interface LanUserHoodieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserHoodieRegular(props: LanUserHoodieRegularProps): React.ReactElement;
export default LanUserHoodieRegular;
