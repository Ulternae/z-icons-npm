import React from 'react';

export interface LanImagePortraitRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagePortraitRegular: React.FC<LanImagePortraitRegularProps>;
export default LanImagePortraitRegular;
