import React from 'react';

export interface LanHorseshoeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseshoeThin: React.FC<LanHorseshoeThinProps>;
export default LanHorseshoeThin;
