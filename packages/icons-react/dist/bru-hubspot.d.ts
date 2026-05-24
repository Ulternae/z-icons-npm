import React from 'react';

export interface BruHubspotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruHubspot: React.FC<BruHubspotProps>;
export default BruHubspot;
