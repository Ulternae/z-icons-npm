import React from 'react';

export interface BruDigitalOceanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruDigitalOcean: React.FC<BruDigitalOceanProps>;
export default BruDigitalOcean;
