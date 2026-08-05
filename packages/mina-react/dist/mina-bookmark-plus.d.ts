import React from 'react';

export interface MinaBookmarkPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkPlus(props: MinaBookmarkPlusProps): React.ReactElement;
export default MinaBookmarkPlus;
