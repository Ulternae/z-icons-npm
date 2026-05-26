import React from 'react';

export interface LanBookmarkSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkSlashThin: React.FC<LanBookmarkSlashThinProps>;
export default LanBookmarkSlashThin;
