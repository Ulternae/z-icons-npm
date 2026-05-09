import React from 'react';

export interface MinaChatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChatSolid: React.FC<MinaChatSolidProps>;
export default MinaChatSolid;
