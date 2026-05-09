import React from 'react';

export interface MinaIncognitoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaIncognitoSolid: React.FC<MinaIncognitoSolidProps>;
export default MinaIncognitoSolid;
