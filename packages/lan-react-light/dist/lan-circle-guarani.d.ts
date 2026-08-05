import React from 'react';

export interface LanCircleGuaraniProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleGuarani(props: LanCircleGuaraniProps): React.ReactElement;
export default LanCircleGuarani;
