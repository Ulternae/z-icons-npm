import React from 'react';

export interface LanBookmarkSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkSlashThin(props: LanBookmarkSlashThinProps): React.ReactElement;
export default LanBookmarkSlashThin;
