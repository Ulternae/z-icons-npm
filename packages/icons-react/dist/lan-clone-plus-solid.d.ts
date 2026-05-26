import React from 'react';

export interface LanClonePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClonePlusSolid: React.FC<LanClonePlusSolidProps>;
export default LanClonePlusSolid;
