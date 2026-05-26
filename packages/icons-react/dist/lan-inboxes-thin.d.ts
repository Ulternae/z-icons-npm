import React from 'react';

export interface LanInboxesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxesThin: React.FC<LanInboxesThinProps>;
export default LanInboxesThin;
