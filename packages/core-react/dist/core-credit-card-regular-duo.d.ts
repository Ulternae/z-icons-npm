import React from 'react';

export interface CoreCreditCardRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCreditCardRegularDuo(props: CoreCreditCardRegularDuoProps): React.ReactElement;
export default CoreCreditCardRegularDuo;
