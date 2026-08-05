import React from 'react';

export interface LanClockThreeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockThree(props: LanClockThreeProps): React.ReactElement;
export default LanClockThree;
