import React from 'react';

export interface LanThumbtackAngleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbtackAngleRegular: React.FC<LanThumbtackAngleRegularProps>;
export default LanThumbtackAngleRegular;
