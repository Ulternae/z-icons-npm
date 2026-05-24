import React from 'react';

export interface BruBlueskyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBluesky: React.FC<BruBlueskyProps>;
export default BruBluesky;
