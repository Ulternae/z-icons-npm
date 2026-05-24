import React from 'react';

export interface BruCloudflareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCloudflare: React.FC<BruCloudflareProps>;
export default BruCloudflare;
