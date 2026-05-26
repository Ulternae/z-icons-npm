import React from 'react';

export interface LanLacrosseStickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLacrosseStickSolid: React.FC<LanLacrosseStickSolidProps>;
export default LanLacrosseStickSolid;
