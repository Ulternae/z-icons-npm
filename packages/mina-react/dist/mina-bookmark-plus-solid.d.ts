import React from 'react';

export interface MinaBookmarkPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkPlusSolid(props: MinaBookmarkPlusSolidProps): React.ReactElement;
export default MinaBookmarkPlusSolid;
