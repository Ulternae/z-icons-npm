import React from 'react';

export interface BruDigitalOceanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruDigitalOcean(props: BruDigitalOceanProps): React.ReactElement;
export default BruDigitalOcean;
