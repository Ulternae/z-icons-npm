import React from 'react';

export interface MinaLikeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLike(props: MinaLikeProps): React.ReactElement;
export default MinaLike;
