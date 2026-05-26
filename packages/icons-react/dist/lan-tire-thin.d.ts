import React from 'react';

export interface LanTireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTireThin: React.FC<LanTireThinProps>;
export default LanTireThin;
