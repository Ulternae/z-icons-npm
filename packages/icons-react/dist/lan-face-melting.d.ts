import React from 'react';

export interface LanFaceMeltingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMelting: React.FC<LanFaceMeltingProps>;
export default LanFaceMelting;
