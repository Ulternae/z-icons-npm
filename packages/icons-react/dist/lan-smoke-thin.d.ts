import React from 'react';

export interface LanSmokeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSmokeThin: React.FC<LanSmokeThinProps>;
export default LanSmokeThin;
