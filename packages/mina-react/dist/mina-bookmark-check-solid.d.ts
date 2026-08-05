import React from 'react';

export interface MinaBookmarkCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkCheckSolid(props: MinaBookmarkCheckSolidProps): React.ReactElement;
export default MinaBookmarkCheckSolid;
