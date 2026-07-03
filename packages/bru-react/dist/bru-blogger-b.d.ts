import React from 'react';

export interface BruBloggerBProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBloggerB(props: BruBloggerBProps): React.ReactElement;
export default BruBloggerB;
