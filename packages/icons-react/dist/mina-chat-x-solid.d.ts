import React from 'react';

export interface MinaChatXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChatXSolid: React.FC<MinaChatXSolidProps>;
export default MinaChatXSolid;
