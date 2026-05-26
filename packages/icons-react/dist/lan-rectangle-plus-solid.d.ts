import React from 'react';

export interface LanRectanglePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRectanglePlusSolid: React.FC<LanRectanglePlusSolidProps>;
export default LanRectanglePlusSolid;
