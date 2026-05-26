import React from 'react';

export interface LanApertureThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanApertureThin: React.FC<LanApertureThinProps>;
export default LanApertureThin;
