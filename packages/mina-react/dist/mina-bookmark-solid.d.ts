import React from 'react';

export interface MinaBookmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkSolid(props: MinaBookmarkSolidProps): React.ReactElement;
export default MinaBookmarkSolid;
