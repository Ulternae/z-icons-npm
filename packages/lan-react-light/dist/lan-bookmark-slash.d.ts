import React from 'react';

export interface LanBookmarkSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkSlash(props: LanBookmarkSlashProps): React.ReactElement;
export default LanBookmarkSlash;
