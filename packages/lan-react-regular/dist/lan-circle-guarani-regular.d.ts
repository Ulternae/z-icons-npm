import React from 'react';

export interface LanCircleGuaraniRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleGuaraniRegular(props: LanCircleGuaraniRegularProps): React.ReactElement;
export default LanCircleGuaraniRegular;
