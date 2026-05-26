import React from 'react';

export interface LanFamilySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFamilySolid: React.FC<LanFamilySolidProps>;
export default LanFamilySolid;
