import React from 'react';

export interface MinaCreditCardXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCreditCardX(props: MinaCreditCardXProps): React.ReactElement;
export default MinaCreditCardX;
