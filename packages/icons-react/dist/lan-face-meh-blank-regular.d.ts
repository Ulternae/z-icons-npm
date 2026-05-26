import React from 'react';

export interface LanFaceMehBlankRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMehBlankRegular: React.FC<LanFaceMehBlankRegularProps>;
export default LanFaceMehBlankRegular;
