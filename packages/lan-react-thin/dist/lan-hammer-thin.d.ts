import React from 'react';

export interface LanHammerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerThin(props: LanHammerThinProps): React.ReactElement;
export default LanHammerThin;
