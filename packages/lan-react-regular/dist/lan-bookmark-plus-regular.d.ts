import React from 'react';

export interface LanBookmarkPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkPlusRegular(props: LanBookmarkPlusRegularProps): React.ReactElement;
export default LanBookmarkPlusRegular;
