import React from 'react';

export interface MinaTypeUnderlineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTypeUnderlineSolid: React.FC<MinaTypeUnderlineSolidProps>;
export default MinaTypeUnderlineSolid;
