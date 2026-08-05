import React from 'react';

export interface LanMobileButtonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileButtonRegular(props: LanMobileButtonRegularProps): React.ReactElement;
export default LanMobileButtonRegular;
