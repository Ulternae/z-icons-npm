import React from 'react';

export interface LanUserBeardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserBeardRegular(props: LanUserBeardRegularProps): React.ReactElement;
export default LanUserBeardRegular;
