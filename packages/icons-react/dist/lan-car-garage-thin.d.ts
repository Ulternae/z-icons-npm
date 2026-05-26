import React from 'react';

export interface LanCarGarageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarGarageThin: React.FC<LanCarGarageThinProps>;
export default LanCarGarageThin;
