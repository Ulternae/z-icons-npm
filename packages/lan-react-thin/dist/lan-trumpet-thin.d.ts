import React from 'react';

export interface LanTrumpetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrumpetThin(props: LanTrumpetThinProps): React.ReactElement;
export default LanTrumpetThin;
