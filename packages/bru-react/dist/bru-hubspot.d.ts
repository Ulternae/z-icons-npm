import React from 'react';

export interface BruHubspotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruHubspot(props: BruHubspotProps): React.ReactElement;
export default BruHubspot;
