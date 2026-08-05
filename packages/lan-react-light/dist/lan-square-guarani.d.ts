import React from 'react';

export interface LanSquareGuaraniProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareGuarani(props: LanSquareGuaraniProps): React.ReactElement;
export default LanSquareGuarani;
