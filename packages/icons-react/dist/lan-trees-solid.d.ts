import React from 'react';

export interface LanTreesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreesSolid: React.FC<LanTreesSolidProps>;
export default LanTreesSolid;
