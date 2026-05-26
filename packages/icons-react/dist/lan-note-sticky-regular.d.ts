import React from 'react';

export interface LanNoteStickyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoteStickyRegular: React.FC<LanNoteStickyRegularProps>;
export default LanNoteStickyRegular;
