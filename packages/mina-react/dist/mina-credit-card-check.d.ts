import React from 'react';

export interface MinaCreditCardCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCreditCardCheck(props: MinaCreditCardCheckProps): React.ReactElement;
export default MinaCreditCardCheck;
