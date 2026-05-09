import React from 'react';

export interface MinaChatPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChatPlusSolid: React.FC<MinaChatPlusSolidProps>;
export default MinaChatPlusSolid;
