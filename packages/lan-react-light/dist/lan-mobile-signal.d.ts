import React from 'react';

export interface LanMobileSignalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileSignal(props: LanMobileSignalProps): React.ReactElement;
export default LanMobileSignal;
