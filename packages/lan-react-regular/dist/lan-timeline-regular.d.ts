import React from 'react';

export interface LanTimelineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTimelineRegular(props: LanTimelineRegularProps): React.ReactElement;
export default LanTimelineRegular;
