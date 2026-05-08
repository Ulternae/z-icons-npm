import React from 'react';

export interface MinaLoginProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLogin: React.FC<MinaLoginProps>;
export default MinaLogin;
