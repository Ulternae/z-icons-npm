import React from 'react';

export interface LanTimelineArrowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimelineArrowRegular: React.FC<LanTimelineArrowRegularProps>;
export default LanTimelineArrowRegular;
