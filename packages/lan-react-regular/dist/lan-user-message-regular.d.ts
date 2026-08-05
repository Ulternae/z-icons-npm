import React from 'react';

export interface LanUserMessageRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserMessageRegular(props: LanUserMessageRegularProps): React.ReactElement;
export default LanUserMessageRegular;
