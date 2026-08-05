import React from 'react';

export interface LanExpandRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanExpandRegular(props: LanExpandRegularProps): React.ReactElement;
export default LanExpandRegular;
