import React from 'react';

export interface LanBookmarkCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkCircleRegular(props: LanBookmarkCircleRegularProps): React.ReactElement;
export default LanBookmarkCircleRegular;
