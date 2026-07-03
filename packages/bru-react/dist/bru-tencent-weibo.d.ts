import React from 'react';

export interface BruTencentWeiboProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTencentWeibo(props: BruTencentWeiboProps): React.ReactElement;
export default BruTencentWeibo;
