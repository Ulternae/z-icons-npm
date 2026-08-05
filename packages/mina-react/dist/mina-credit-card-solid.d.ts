import React from 'react';

export interface MinaCreditCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCreditCardSolid(props: MinaCreditCardSolidProps): React.ReactElement;
export default MinaCreditCardSolid;
