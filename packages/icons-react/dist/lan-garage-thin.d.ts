import React from 'react';

export interface LanGarageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageThin: React.FC<LanGarageThinProps>;
export default LanGarageThin;
