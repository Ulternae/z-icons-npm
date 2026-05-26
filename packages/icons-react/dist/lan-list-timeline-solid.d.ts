import React from 'react';

export interface LanListTimelineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListTimelineSolid: React.FC<LanListTimelineSolidProps>;
export default LanListTimelineSolid;
