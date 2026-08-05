import React from 'react';

export interface LanCircleGuaraniSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleGuaraniSolid(props: LanCircleGuaraniSolidProps): React.ReactElement;
export default LanCircleGuaraniSolid;
