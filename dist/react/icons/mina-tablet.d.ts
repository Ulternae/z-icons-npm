import React from 'react';

export interface MinaTabletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTablet: React.FC<MinaTabletProps>;
export default MinaTablet;
