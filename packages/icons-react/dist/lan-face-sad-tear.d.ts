import React from 'react';

export interface LanFaceSadTearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSadTear: React.FC<LanFaceSadTearProps>;
export default LanFaceSadTear;
