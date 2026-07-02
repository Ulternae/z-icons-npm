import React from 'react';

export interface CoreNewspaperProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreNewspaper(props: CoreNewspaperProps): React.ReactElement;
export default CoreNewspaper;
