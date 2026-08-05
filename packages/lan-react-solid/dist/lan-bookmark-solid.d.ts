import React from 'react';

export interface LanBookmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkSolid(props: LanBookmarkSolidProps): React.ReactElement;
export default LanBookmarkSolid;
