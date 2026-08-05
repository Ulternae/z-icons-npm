import React from 'react';

export interface LanSquareGuaraniSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareGuaraniSolid(props: LanSquareGuaraniSolidProps): React.ReactElement;
export default LanSquareGuaraniSolid;
