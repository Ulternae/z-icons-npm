import React from 'react';

export interface MinaBookmarkHomeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkHomeSolid(props: MinaBookmarkHomeSolidProps): React.ReactElement;
export default MinaBookmarkHomeSolid;
