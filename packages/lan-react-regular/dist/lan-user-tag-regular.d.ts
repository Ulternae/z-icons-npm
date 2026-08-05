import React from 'react';

export interface LanUserTagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserTagRegular(props: LanUserTagRegularProps): React.ReactElement;
export default LanUserTagRegular;
