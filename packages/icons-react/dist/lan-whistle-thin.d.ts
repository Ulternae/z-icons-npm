import React from 'react';

export interface LanWhistleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWhistleThin: React.FC<LanWhistleThinProps>;
export default LanWhistleThin;
