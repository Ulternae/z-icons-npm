import React from 'react';

export interface LanShieldDogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldDogThin(props: LanShieldDogThinProps): React.ReactElement;
export default LanShieldDogThin;
