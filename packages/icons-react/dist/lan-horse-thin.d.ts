import React from 'react';

export interface LanHorseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseThin: React.FC<LanHorseThinProps>;
export default LanHorseThin;
