import React from 'react';

export interface LanCarBumpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBumpThin(props: LanCarBumpThinProps): React.ReactElement;
export default LanCarBumpThin;
