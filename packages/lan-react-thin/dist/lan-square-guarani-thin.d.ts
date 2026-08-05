import React from 'react';

export interface LanSquareGuaraniThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareGuaraniThin(props: LanSquareGuaraniThinProps): React.ReactElement;
export default LanSquareGuaraniThin;
