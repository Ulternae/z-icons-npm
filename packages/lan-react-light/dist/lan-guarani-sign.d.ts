import React from 'react';

export interface LanGuaraniSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuaraniSign(props: LanGuaraniSignProps): React.ReactElement;
export default LanGuaraniSign;
