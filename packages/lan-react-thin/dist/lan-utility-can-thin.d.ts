import React from 'react';

export interface LanUtilityCanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUtilityCanThin(props: LanUtilityCanThinProps): React.ReactElement;
export default LanUtilityCanThin;
