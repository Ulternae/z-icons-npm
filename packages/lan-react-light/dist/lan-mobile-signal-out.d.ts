import React from 'react';

export interface LanMobileSignalOutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileSignalOut(props: LanMobileSignalOutProps): React.ReactElement;
export default LanMobileSignalOut;
