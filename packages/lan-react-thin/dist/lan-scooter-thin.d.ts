import React from 'react';

export interface LanScooterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScooterThin(props: LanScooterThinProps): React.ReactElement;
export default LanScooterThin;
