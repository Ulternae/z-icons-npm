import React from 'react';

export interface MinaBookmarkSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkSlash: React.FC<MinaBookmarkSlashProps>;
export default MinaBookmarkSlash;
