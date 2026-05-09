import React from 'react';

export interface MinaAlignVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlignVertical: React.FC<MinaAlignVerticalProps>;
export default MinaAlignVertical;
