import React from 'react';

export interface LanHandcuffsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandcuffsThin: React.FC<LanHandcuffsThinProps>;
export default LanHandcuffsThin;
