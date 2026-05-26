import React from 'react';

export interface LanDiscDriveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiscDriveRegular: React.FC<LanDiscDriveRegularProps>;
export default LanDiscDriveRegular;
