import React from 'react';

export interface LanCaravanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaravanThin(props: LanCaravanThinProps): React.ReactElement;
export default LanCaravanThin;
