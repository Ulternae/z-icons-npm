import React from 'react';

export interface LanLacrosseStickRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLacrosseStickRegular: React.FC<LanLacrosseStickRegularProps>;
export default LanLacrosseStickRegular;
