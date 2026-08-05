import React from 'react';

export interface LanPassportThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPassportThin(props: LanPassportThinProps): React.ReactElement;
export default LanPassportThin;
