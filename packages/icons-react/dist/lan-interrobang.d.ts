import React from 'react';

export interface LanInterrobangProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanInterrobang: React.FC<LanInterrobangProps>;
export default LanInterrobang;
