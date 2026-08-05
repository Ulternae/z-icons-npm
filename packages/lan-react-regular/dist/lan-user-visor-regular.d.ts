import React from 'react';

export interface LanUserVisorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserVisorRegular(props: LanUserVisorRegularProps): React.ReactElement;
export default LanUserVisorRegular;
