import React from 'react';

export interface MinaIncognitoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaIncognito: React.FC<MinaIncognitoProps>;
export default MinaIncognito;
