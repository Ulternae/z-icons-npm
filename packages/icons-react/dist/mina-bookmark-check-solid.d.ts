import React from 'react';

export interface MinaBookmarkCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkCheckSolid: React.FC<MinaBookmarkCheckSolidProps>;
export default MinaBookmarkCheckSolid;
