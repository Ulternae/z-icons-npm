import React from 'react';

export interface LanFaceDizzySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDizzySolid: React.FC<LanFaceDizzySolidProps>;
export default LanFaceDizzySolid;
