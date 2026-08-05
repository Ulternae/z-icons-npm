import React from 'react';

export interface LanMobileSignalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileSignalRegular(props: LanMobileSignalRegularProps): React.ReactElement;
export default LanMobileSignalRegular;
