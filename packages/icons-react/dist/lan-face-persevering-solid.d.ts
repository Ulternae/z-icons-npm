import React from 'react';

export interface LanFacePerseveringSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFacePerseveringSolid: React.FC<LanFacePerseveringSolidProps>;
export default LanFacePerseveringSolid;
