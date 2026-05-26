import React from 'react';

export interface LanStethoscopeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStethoscopeThin: React.FC<LanStethoscopeThinProps>;
export default LanStethoscopeThin;
