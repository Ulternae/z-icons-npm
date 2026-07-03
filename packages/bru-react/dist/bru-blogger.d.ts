import React from 'react';

export interface BruBloggerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruBlogger(props: BruBloggerProps): React.ReactElement;
export default BruBlogger;
