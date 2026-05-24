import React from 'react';

export interface BruCloudsmithProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCloudsmith: React.FC<BruCloudsmithProps>;
export default BruCloudsmith;
