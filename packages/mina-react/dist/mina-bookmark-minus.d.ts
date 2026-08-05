import React from 'react';

export interface MinaBookmarkMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkMinus(props: MinaBookmarkMinusProps): React.ReactElement;
export default MinaBookmarkMinus;
