import React from 'react';

export interface MinaConfigVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaConfigVertical: React.FC<MinaConfigVerticalProps>;
export default MinaConfigVertical;
