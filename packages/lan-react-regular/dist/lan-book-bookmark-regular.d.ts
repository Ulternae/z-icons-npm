import React from 'react';

export interface LanBookBookmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookBookmarkRegular(props: LanBookBookmarkRegularProps): React.ReactElement;
export default LanBookBookmarkRegular;
