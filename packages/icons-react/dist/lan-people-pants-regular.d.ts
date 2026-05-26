import React from 'react';

export interface LanPeoplePantsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeoplePantsRegular: React.FC<LanPeoplePantsRegularProps>;
export default LanPeoplePantsRegular;
