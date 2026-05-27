import React from 'react';

export interface CoreNewspaperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreNewspaper: React.FC<CoreNewspaperProps>;
export default CoreNewspaper;
