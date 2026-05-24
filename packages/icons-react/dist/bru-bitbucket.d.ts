import React from 'react';

export interface BruBitbucketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBitbucket: React.FC<BruBitbucketProps>;
export default BruBitbucket;
