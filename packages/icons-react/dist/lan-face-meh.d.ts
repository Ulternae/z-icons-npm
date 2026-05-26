import React from 'react';

export interface LanFaceMehProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMeh: React.FC<LanFaceMehProps>;
export default LanFaceMeh;
