import React from 'react';

export interface LanInterrobangRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInterrobangRegular: React.FC<LanInterrobangRegularProps>;
export default LanInterrobangRegular;
