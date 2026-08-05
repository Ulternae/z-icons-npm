import React from 'react';

export interface LanBucketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBucket(props: LanBucketProps): React.ReactElement;
export default LanBucket;
