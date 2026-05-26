import React from 'react';

export interface LanGuaraniSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuaraniSignThin: React.FC<LanGuaraniSignThinProps>;
export default LanGuaraniSignThin;
