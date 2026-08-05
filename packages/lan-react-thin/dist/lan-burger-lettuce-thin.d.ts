import React from 'react';

export interface LanBurgerLettuceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerLettuceThin(props: LanBurgerLettuceThinProps): React.ReactElement;
export default LanBurgerLettuceThin;
