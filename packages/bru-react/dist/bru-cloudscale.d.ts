import React from 'react';

export interface BruCloudscaleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCloudscale(props: BruCloudscaleProps): React.ReactElement;
export default BruCloudscale;
