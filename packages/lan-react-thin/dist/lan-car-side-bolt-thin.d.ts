import React from 'react';

export interface LanCarSideBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSideBoltThin(props: LanCarSideBoltThinProps): React.ReactElement;
export default LanCarSideBoltThin;
