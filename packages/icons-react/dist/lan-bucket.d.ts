import React from 'react';

export interface LanBucketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBucket: React.FC<LanBucketProps>;
export default LanBucket;
