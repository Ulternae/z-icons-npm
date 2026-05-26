import React from 'react';

export interface LanFireSmokeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFireSmokeThin: React.FC<LanFireSmokeThinProps>;
export default LanFireSmokeThin;
