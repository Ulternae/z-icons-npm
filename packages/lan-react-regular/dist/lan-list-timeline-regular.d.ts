import React from 'react';

export interface LanListTimelineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListTimelineRegular(props: LanListTimelineRegularProps): React.ReactElement;
export default LanListTimelineRegular;
