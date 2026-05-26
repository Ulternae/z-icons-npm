import React from 'react';

export interface LanPersonSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonSimpleThin: React.FC<LanPersonSimpleThinProps>;
export default LanPersonSimpleThin;
