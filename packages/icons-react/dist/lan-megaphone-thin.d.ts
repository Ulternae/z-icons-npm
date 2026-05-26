import React from 'react';

export interface LanMegaphoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMegaphoneThin: React.FC<LanMegaphoneThinProps>;
export default LanMegaphoneThin;
