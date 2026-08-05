import React from 'react';

export interface LanPopcornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPopcornRegular(props: LanPopcornRegularProps): React.ReactElement;
export default LanPopcornRegular;
