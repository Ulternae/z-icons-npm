import React from 'react';

export interface LanAnkhThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnkhThin: React.FC<LanAnkhThinProps>;
export default LanAnkhThin;
