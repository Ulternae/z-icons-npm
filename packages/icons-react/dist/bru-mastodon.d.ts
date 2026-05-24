import React from 'react';

export interface BruMastodonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMastodon: React.FC<BruMastodonProps>;
export default BruMastodon;
