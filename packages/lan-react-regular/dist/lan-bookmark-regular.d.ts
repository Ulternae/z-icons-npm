import React from 'react';

export interface LanBookmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkRegular(props: LanBookmarkRegularProps): React.ReactElement;
export default LanBookmarkRegular;
