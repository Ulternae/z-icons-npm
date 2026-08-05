import React from 'react';

export interface LanUserCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserCheckRegular(props: LanUserCheckRegularProps): React.ReactElement;
export default LanUserCheckRegular;
