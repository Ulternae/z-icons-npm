import React from 'react';

export interface BruWeiboProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruWeibo(props: BruWeiboProps): React.ReactElement;
export default BruWeibo;
