import React from 'react';

export interface MinaBookmarkDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkDotSolid(props: MinaBookmarkDotSolidProps): React.ReactElement;
export default MinaBookmarkDotSolid;
