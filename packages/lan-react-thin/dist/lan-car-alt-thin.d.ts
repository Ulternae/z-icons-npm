import React from 'react';

export interface LanCarAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarAltThin(props: LanCarAltThinProps): React.ReactElement;
export default LanCarAltThin;
