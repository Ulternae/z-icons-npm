import React from 'react';

export interface LanCircleGuaraniThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleGuaraniThin(props: LanCircleGuaraniThinProps): React.ReactElement;
export default LanCircleGuaraniThin;
