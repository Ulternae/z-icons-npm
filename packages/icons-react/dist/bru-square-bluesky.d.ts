import React from 'react';

export interface BruSquareBlueskyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareBluesky: React.FC<BruSquareBlueskyProps>;
export default BruSquareBluesky;
