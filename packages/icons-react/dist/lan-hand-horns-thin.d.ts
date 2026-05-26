import React from 'react';

export interface LanHandHornsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHornsThin: React.FC<LanHandHornsThinProps>;
export default LanHandHornsThin;
