import React from 'react';

export interface LanTimelineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimelineRegular: React.FC<LanTimelineRegularProps>;
export default LanTimelineRegular;
