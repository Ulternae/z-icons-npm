import React from 'react';

export interface LanBucketThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBucketThin: React.FC<LanBucketThinProps>;
export default LanBucketThin;
