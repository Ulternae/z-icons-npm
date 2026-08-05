import React from 'react';

export interface LanCarWrenchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarWrenchThin(props: LanCarWrenchThinProps): React.ReactElement;
export default LanCarWrenchThin;
