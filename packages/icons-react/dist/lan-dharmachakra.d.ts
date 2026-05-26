import React from 'react';

export interface LanDharmachakraProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDharmachakra: React.FC<LanDharmachakraProps>;
export default LanDharmachakra;
