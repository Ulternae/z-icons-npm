import React from 'react';

export interface MinaCreditCardCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCreditCardCheckSolid: React.FC<MinaCreditCardCheckSolidProps>;
export default MinaCreditCardCheckSolid;
