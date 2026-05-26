import React from 'react';

export interface LanFaceSmilingHandsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSmilingHandsSolid: React.FC<LanFaceSmilingHandsSolidProps>;
export default LanFaceSmilingHandsSolid;
