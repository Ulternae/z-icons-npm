import React from 'react';

export interface MinaDislikeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDislike: React.FC<MinaDislikeProps>;
export default MinaDislike;
