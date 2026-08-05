import React from 'react';

export interface MinaIncognitoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaIncognitoSolid(props: MinaIncognitoSolidProps): React.ReactElement;
export default MinaIncognitoSolid;
