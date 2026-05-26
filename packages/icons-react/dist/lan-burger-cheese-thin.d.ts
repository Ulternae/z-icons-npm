import React from 'react';

export interface LanBurgerCheeseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBurgerCheeseThin: React.FC<LanBurgerCheeseThinProps>;
export default LanBurgerCheeseThin;
