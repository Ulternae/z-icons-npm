import React from 'react';

export interface MinaTreesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTreesSolid: React.FC<MinaTreesSolidProps>;
export default MinaTreesSolid;
