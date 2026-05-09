import React from 'react';

export interface MinaFatCornerUpLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFatCornerUpLeft: React.FC<MinaFatCornerUpLeftProps>;
export default MinaFatCornerUpLeft;
