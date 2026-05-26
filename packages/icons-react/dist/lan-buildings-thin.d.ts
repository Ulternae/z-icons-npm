import React from 'react';

export interface LanBuildingsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuildingsThin: React.FC<LanBuildingsThinProps>;
export default LanBuildingsThin;
