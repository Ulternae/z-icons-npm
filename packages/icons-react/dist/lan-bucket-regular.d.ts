import React from 'react';

export interface LanBucketRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBucketRegular: React.FC<LanBucketRegularProps>;
export default LanBucketRegular;
