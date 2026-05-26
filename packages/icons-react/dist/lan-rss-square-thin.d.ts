import React from 'react';

export interface LanRssSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRssSquareThin: React.FC<LanRssSquareThinProps>;
export default LanRssSquareThin;
