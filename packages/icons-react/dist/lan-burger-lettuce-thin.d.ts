import React from 'react';

export interface LanBurgerLettuceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerLettuceThin: React.FC<LanBurgerLettuceThinProps>;
export default LanBurgerLettuceThin;
