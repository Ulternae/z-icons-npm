import React from 'react';

export interface MinaCampfireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCampfire: React.FC<MinaCampfireProps>;
export default MinaCampfire;
