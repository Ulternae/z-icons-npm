import React from 'react';

export interface LanSprinklerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprinklerThin(props: LanSprinklerThinProps): React.ReactElement;
export default LanSprinklerThin;
