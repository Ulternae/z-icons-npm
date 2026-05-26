import React from 'react';

export interface LanBookmarkSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkSlash: React.FC<LanBookmarkSlashProps>;
export default LanBookmarkSlash;
