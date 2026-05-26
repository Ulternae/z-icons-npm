import React from 'react';

export interface LanShirtLongSleeveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtLongSleeve: React.FC<LanShirtLongSleeveProps>;
export default LanShirtLongSleeve;
