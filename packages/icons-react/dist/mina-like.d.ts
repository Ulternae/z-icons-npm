import React from 'react';

export interface MinaLikeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLike: React.FC<MinaLikeProps>;
export default MinaLike;
