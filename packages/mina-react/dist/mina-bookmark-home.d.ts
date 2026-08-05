import React from 'react';

export interface MinaBookmarkHomeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkHome(props: MinaBookmarkHomeProps): React.ReactElement;
export default MinaBookmarkHome;
