import React from 'react';

export interface MinaChatMessagesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChatMessagesSolid: React.FC<MinaChatMessagesSolidProps>;
export default MinaChatMessagesSolid;
