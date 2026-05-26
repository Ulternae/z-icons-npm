import React from 'react';

export interface LanInboxFullThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxFullThin: React.FC<LanInboxFullThinProps>;
export default LanInboxFullThin;
