import React from 'react';

export interface LanMobileScreenButtonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileScreenButtonRegular(props: LanMobileScreenButtonRegularProps): React.ReactElement;
export default LanMobileScreenButtonRegular;
