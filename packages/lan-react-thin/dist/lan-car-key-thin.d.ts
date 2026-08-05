import React from 'react';

export interface LanCarKeyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarKeyThin(props: LanCarKeyThinProps): React.ReactElement;
export default LanCarKeyThin;
