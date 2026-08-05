import React from 'react';

export interface LanXmarksLinesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXmarksLinesSolid(props: LanXmarksLinesSolidProps): React.ReactElement;
export default LanXmarksLinesSolid;
