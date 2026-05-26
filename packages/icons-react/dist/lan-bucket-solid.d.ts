import React from 'react';

export interface LanBucketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBucketSolid: React.FC<LanBucketSolidProps>;
export default LanBucketSolid;
