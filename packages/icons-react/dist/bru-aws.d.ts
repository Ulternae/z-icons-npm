import React from 'react';

export interface BruAwsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruAws: React.FC<BruAwsProps>;
export default BruAws;
