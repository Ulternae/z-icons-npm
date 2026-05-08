import React from 'react';

export interface MinaFlameKindlingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFlameKindlingSolid: React.FC<MinaFlameKindlingSolidProps>;
export default MinaFlameKindlingSolid;
