import React from 'react';

export interface BruCloudscaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCloudscale: React.FC<BruCloudscaleProps>;
export default BruCloudscale;
