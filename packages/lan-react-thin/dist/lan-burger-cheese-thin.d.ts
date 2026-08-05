import React from 'react';

export interface LanBurgerCheeseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBurgerCheeseThin(props: LanBurgerCheeseThinProps): React.ReactElement;
export default LanBurgerCheeseThin;
