import React from 'react';

export interface MinaCreditCardCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCreditCardCheckSolid(props: MinaCreditCardCheckSolidProps): React.ReactElement;
export default MinaCreditCardCheckSolid;
