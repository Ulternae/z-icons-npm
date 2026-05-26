import React from 'react';

export interface LanMotorcycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMotorcycleThin: React.FC<LanMotorcycleThinProps>;
export default LanMotorcycleThin;
