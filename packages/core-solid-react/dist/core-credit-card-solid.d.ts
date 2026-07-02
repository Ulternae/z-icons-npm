import React from 'react';

export interface CoreCreditCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCreditCardSolid(props: CoreCreditCardSolidProps): React.ReactElement;
export default CoreCreditCardSolid;
