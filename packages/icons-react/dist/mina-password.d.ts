import React from 'react';

export interface MinaPasswordProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPassword: React.FC<MinaPasswordProps>;
export default MinaPassword;
