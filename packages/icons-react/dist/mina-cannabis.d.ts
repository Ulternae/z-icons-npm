import React from 'react';

export interface MinaCannabisProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCannabis: React.FC<MinaCannabisProps>;
export default MinaCannabis;
