import React from 'react';

export interface LanQThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanQThin(props: LanQThinProps): React.ReactElement;
export default LanQThin;
