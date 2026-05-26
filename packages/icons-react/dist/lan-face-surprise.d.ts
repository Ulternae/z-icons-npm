import React from 'react';

export interface LanFaceSurpriseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceSurprise: React.FC<LanFaceSurpriseProps>;
export default LanFaceSurprise;
