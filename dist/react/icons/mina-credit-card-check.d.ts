import React from 'react';

export interface MinaCreditCardCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCreditCardCheck: React.FC<MinaCreditCardCheckProps>;
export default MinaCreditCardCheck;
