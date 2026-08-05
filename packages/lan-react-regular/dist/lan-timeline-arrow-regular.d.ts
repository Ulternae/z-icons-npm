import React from 'react';

export interface LanTimelineArrowRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimelineArrowRegular(props: LanTimelineArrowRegularProps): React.ReactElement;
export default LanTimelineArrowRegular;
