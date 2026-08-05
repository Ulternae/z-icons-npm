import React from 'react';

export interface LanBurgerLettuceSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerLettuceSolid(props: LanBurgerLettuceSolidProps): React.ReactElement;
export default LanBurgerLettuceSolid;
