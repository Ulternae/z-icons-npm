import React from 'react';

export interface MinaBookmarkSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkSnoozeSolid: React.FC<MinaBookmarkSnoozeSolidProps>;
export default MinaBookmarkSnoozeSolid;
