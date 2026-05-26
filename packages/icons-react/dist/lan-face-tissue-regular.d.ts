import React from 'react';

export interface LanFaceTissueRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceTissueRegular: React.FC<LanFaceTissueRegularProps>;
export default LanFaceTissueRegular;
