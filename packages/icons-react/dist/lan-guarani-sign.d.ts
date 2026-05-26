import React from 'react';

export interface LanGuaraniSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuaraniSign: React.FC<LanGuaraniSignProps>;
export default LanGuaraniSign;
