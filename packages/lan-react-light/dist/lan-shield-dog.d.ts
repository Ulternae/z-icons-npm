import React from 'react';

export interface LanShieldDogProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldDog(props: LanShieldDogProps): React.ReactElement;
export default LanShieldDog;
