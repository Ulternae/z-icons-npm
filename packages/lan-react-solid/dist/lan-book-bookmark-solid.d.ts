import React from 'react';

export interface LanBookBookmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookBookmarkSolid(props: LanBookBookmarkSolidProps): React.ReactElement;
export default LanBookBookmarkSolid;
