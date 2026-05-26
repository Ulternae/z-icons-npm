import React from 'react';

export interface LanDownRightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownRightRegular: React.FC<LanDownRightRegularProps>;
export default LanDownRightRegular;
