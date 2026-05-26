import React from 'react';

export interface LanVideoHandheldThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVideoHandheldThin: React.FC<LanVideoHandheldThinProps>;
export default LanVideoHandheldThin;
