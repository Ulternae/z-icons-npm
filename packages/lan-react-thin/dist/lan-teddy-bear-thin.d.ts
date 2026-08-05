import React from 'react';

export interface LanTeddyBearThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTeddyBearThin(props: LanTeddyBearThinProps): React.ReactElement;
export default LanTeddyBearThin;
