import React from 'react';

export interface MinaCreditCardXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCreditCardXSolid(props: MinaCreditCardXSolidProps): React.ReactElement;
export default MinaCreditCardXSolid;
