import React from 'react';

export interface LanCommaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCommaThin: React.FC<LanCommaThinProps>;
export default LanCommaThin;
