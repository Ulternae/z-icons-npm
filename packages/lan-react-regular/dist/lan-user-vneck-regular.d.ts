import React from 'react';

export interface LanUserVneckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserVneckRegular(props: LanUserVneckRegularProps): React.ReactElement;
export default LanUserVneckRegular;
