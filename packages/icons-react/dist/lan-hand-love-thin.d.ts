import React from 'react';

export interface LanHandLoveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandLoveThin: React.FC<LanHandLoveThinProps>;
export default LanHandLoveThin;
