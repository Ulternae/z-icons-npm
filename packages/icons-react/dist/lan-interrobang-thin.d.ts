import React from 'react';

export interface LanInterrobangThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInterrobangThin: React.FC<LanInterrobangThinProps>;
export default LanInterrobangThin;
