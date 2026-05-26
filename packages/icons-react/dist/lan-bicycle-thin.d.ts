import React from 'react';

export interface LanBicycleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBicycleThin: React.FC<LanBicycleThinProps>;
export default LanBicycleThin;
