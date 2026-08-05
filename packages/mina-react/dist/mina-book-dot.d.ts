import React from 'react';

export interface MinaBookDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookDot(props: MinaBookDotProps): React.ReactElement;
export default MinaBookDot;
