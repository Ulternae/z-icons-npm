import React from 'react';

export interface MinaAccessibilitySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAccessibilitySolid: React.FC<MinaAccessibilitySolidProps>;
export default MinaAccessibilitySolid;
