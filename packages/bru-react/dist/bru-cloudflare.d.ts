import React from 'react';

export interface BruCloudflareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCloudflare(props: BruCloudflareProps): React.ReactElement;
export default BruCloudflare;
