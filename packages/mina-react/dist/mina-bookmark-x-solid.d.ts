import React from 'react';

export interface MinaBookmarkXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkXSolid(props: MinaBookmarkXSolidProps): React.ReactElement;
export default MinaBookmarkXSolid;
