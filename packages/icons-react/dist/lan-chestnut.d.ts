import React from 'react';

export interface LanChestnutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChestnut: React.FC<LanChestnutProps>;
export default LanChestnut;
