import React from 'react';

export interface BruBitbucketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBitbucket(props: BruBitbucketProps): React.ReactElement;
export default BruBitbucket;
