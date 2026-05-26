import React from 'react';

export interface LanCircleTengeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleTengeThin: React.FC<LanCircleTengeThinProps>;
export default LanCircleTengeThin;
