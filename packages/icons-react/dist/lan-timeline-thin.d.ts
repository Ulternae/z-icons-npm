import React from 'react';

export interface LanTimelineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimelineThin: React.FC<LanTimelineThinProps>;
export default LanTimelineThin;
