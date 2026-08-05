import React from 'react';

export interface LanBookmarkCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkCircleSolid(props: LanBookmarkCircleSolidProps): React.ReactElement;
export default LanBookmarkCircleSolid;
