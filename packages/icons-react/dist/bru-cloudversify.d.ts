import React from 'react';

export interface BruCloudversifyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCloudversify: React.FC<BruCloudversifyProps>;
export default BruCloudversify;
