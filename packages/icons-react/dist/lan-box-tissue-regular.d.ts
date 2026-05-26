import React from 'react';

export interface LanBoxTissueRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxTissueRegular: React.FC<LanBoxTissueRegularProps>;
export default LanBoxTissueRegular;
