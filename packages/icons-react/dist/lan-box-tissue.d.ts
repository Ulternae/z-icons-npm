import React from 'react';

export interface LanBoxTissueProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxTissue: React.FC<LanBoxTissueProps>;
export default LanBoxTissue;
