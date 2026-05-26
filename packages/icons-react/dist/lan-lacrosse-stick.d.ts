import React from 'react';

export interface LanLacrosseStickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLacrosseStick: React.FC<LanLacrosseStickProps>;
export default LanLacrosseStick;
