import React from 'react';

export interface MinaBookmarkDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkDot(props: MinaBookmarkDotProps): React.ReactElement;
export default MinaBookmarkDot;
