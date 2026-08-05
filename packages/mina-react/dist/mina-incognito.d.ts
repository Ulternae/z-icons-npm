import React from 'react';

export interface MinaIncognitoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaIncognito(props: MinaIncognitoProps): React.ReactElement;
export default MinaIncognito;
