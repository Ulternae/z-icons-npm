import React from 'react';

export interface LanShieldDogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldDogSolid(props: LanShieldDogSolidProps): React.ReactElement;
export default LanShieldDogSolid;
