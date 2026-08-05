import React from 'react';

export interface LanBookmarkCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkCircle(props: LanBookmarkCircleProps): React.ReactElement;
export default LanBookmarkCircle;
