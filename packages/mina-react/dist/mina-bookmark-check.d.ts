import React from 'react';

export interface MinaBookmarkCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkCheck(props: MinaBookmarkCheckProps): React.ReactElement;
export default MinaBookmarkCheck;
