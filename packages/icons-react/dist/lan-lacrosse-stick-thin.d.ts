import React from 'react';

export interface LanLacrosseStickThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLacrosseStickThin: React.FC<LanLacrosseStickThinProps>;
export default LanLacrosseStickThin;
