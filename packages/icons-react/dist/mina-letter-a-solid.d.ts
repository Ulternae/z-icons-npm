import React from 'react';

export interface MinaLetterASolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterASolid: React.FC<MinaLetterASolidProps>;
export default MinaLetterASolid;
