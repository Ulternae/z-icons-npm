import React from 'react';

export interface LanGearComplexThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearComplexThin(props: LanGearComplexThinProps): React.ReactElement;
export default LanGearComplexThin;
