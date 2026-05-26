import React from 'react';

export interface LanScytheThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScytheThin: React.FC<LanScytheThinProps>;
export default LanScytheThin;
