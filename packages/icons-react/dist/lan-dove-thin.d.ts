import React from 'react';

export interface LanDoveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDoveThin: React.FC<LanDoveThinProps>;
export default LanDoveThin;
