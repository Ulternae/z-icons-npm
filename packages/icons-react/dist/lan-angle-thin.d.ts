import React from 'react';

export interface LanAngleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleThin: React.FC<LanAngleThinProps>;
export default LanAngleThin;
