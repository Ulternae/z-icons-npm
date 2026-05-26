import React from 'react';

export interface LanListTimelineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListTimelineRegular: React.FC<LanListTimelineRegularProps>;
export default LanListTimelineRegular;
