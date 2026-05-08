import React from 'react';

export interface MinaSquareDashedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSquareDashed: React.FC<MinaSquareDashedProps>;
export default MinaSquareDashed;
