import React from 'react';

export interface LanTrafficConeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrafficConeThin: React.FC<LanTrafficConeThinProps>;
export default LanTrafficConeThin;
