import React from 'react';

export interface MinaShieldMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaShieldMinusSolid: React.FC<MinaShieldMinusSolidProps>;
export default MinaShieldMinusSolid;
