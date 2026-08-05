import React from 'react';

export interface LanSignalStreamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignalStreamThin(props: LanSignalStreamThinProps): React.ReactElement;
export default LanSignalStreamThin;
