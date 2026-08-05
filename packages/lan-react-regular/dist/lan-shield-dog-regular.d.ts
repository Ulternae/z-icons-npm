import React from 'react';

export interface LanShieldDogRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldDogRegular(props: LanShieldDogRegularProps): React.ReactElement;
export default LanShieldDogRegular;
