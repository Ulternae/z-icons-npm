import React from 'react';

export interface LanInboxFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxFullSolid: React.FC<LanInboxFullSolidProps>;
export default LanInboxFullSolid;
