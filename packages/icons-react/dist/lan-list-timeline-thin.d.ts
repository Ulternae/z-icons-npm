import React from 'react';

export interface LanListTimelineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListTimelineThin: React.FC<LanListTimelineThinProps>;
export default LanListTimelineThin;
