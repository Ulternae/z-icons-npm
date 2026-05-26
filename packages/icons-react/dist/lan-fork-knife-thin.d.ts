import React from 'react';

export interface LanForkKnifeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForkKnifeThin: React.FC<LanForkKnifeThinProps>;
export default LanForkKnifeThin;
