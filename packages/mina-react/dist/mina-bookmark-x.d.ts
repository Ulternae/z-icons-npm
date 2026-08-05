import React from 'react';

export interface MinaBookmarkXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkX(props: MinaBookmarkXProps): React.ReactElement;
export default MinaBookmarkX;
