import React from 'react';

export interface LanInboxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInboxSolid: React.FC<LanInboxSolidProps>;
export default LanInboxSolid;
