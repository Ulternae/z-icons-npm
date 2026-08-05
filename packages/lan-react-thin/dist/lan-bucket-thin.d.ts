import React from 'react';

export interface LanBucketThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBucketThin(props: LanBucketThinProps): React.ReactElement;
export default LanBucketThin;
