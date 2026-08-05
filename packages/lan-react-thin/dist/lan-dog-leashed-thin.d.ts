import React from 'react';

export interface LanDogLeashedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDogLeashedThin(props: LanDogLeashedThinProps): React.ReactElement;
export default LanDogLeashedThin;
