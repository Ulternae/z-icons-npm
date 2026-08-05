import React from 'react';

export interface LanDogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDogThin(props: LanDogThinProps): React.ReactElement;
export default LanDogThin;
