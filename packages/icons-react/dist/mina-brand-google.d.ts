import React from 'react';

export interface MinaBrandGoogleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandGoogle: React.FC<MinaBrandGoogleProps>;
export default MinaBrandGoogle;
