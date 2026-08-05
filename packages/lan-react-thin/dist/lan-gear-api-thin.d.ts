import React from 'react';

export interface LanGearApiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGearApiThin(props: LanGearApiThinProps): React.ReactElement;
export default LanGearApiThin;
