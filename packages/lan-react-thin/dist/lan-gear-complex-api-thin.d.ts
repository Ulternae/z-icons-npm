import React from 'react';

export interface LanGearComplexApiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearComplexApiThin(props: LanGearComplexApiThinProps): React.ReactElement;
export default LanGearComplexApiThin;
