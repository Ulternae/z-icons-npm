import React from 'react';

export interface MinaChatCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChatCheckSolid: React.FC<MinaChatCheckSolidProps>;
export default MinaChatCheckSolid;
