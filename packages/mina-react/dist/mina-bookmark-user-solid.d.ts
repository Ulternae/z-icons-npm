import React from 'react';

export interface MinaBookmarkUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkUserSolid(props: MinaBookmarkUserSolidProps): React.ReactElement;
export default MinaBookmarkUserSolid;
