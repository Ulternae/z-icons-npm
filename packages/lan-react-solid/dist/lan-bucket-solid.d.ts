import React from 'react';

export interface LanBucketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBucketSolid(props: LanBucketSolidProps): React.ReactElement;
export default LanBucketSolid;
