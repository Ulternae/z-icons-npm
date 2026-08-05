import React from 'react';

export interface MinaCreditCardPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCreditCardPlusSolid(props: MinaCreditCardPlusSolidProps): React.ReactElement;
export default MinaCreditCardPlusSolid;
