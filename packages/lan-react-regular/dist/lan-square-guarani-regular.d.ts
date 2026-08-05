import React from 'react';

export interface LanSquareGuaraniRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareGuaraniRegular(props: LanSquareGuaraniRegularProps): React.ReactElement;
export default LanSquareGuaraniRegular;
