import React from 'react';

export interface LanBucketRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBucketRegular(props: LanBucketRegularProps): React.ReactElement;
export default LanBucketRegular;
