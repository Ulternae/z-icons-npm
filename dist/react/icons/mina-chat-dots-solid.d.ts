import React from 'react';

export interface MinaChatDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChatDotsSolid: React.FC<MinaChatDotsSolidProps>;
export default MinaChatDotsSolid;
