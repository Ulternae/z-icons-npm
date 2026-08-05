import React from 'react';

export interface LanMobileSignalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileSignalThin(props: LanMobileSignalThinProps): React.ReactElement;
export default LanMobileSignalThin;
