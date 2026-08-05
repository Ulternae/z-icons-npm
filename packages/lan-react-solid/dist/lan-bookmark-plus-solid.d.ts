import React from 'react';

export interface LanBookmarkPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkPlusSolid(props: LanBookmarkPlusSolidProps): React.ReactElement;
export default LanBookmarkPlusSolid;
