import React from 'react';

export interface BruCloudsmithProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCloudsmith(props: BruCloudsmithProps): React.ReactElement;
export default BruCloudsmith;
