import React from 'react';

export interface BruCloudversifyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruCloudversify(props: BruCloudversifyProps): React.ReactElement;
export default BruCloudversify;
