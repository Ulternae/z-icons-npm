import React from 'react';

export interface MinaBadgeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBadgeSolid: React.FC<MinaBadgeSolidProps>;
export default MinaBadgeSolid;
