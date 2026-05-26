import React from 'react';

export interface LanFaceSurpriseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSurpriseRegular: React.FC<LanFaceSurpriseRegularProps>;
export default LanFaceSurpriseRegular;
