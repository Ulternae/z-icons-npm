import React from 'react';

export interface MinaBookmarkSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkSlash(props: MinaBookmarkSlashProps): React.ReactElement;
export default MinaBookmarkSlash;
