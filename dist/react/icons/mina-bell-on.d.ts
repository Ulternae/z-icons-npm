import React from 'react';

export interface MinaBellOnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBellOn: React.FC<MinaBellOnProps>;
export default MinaBellOn;
