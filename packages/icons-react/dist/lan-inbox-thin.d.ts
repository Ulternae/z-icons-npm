import React from 'react';

export interface LanInboxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxThin: React.FC<LanInboxThinProps>;
export default LanInboxThin;
