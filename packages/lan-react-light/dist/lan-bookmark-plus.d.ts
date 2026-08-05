import React from 'react';

export interface LanBookmarkPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkPlus(props: LanBookmarkPlusProps): React.ReactElement;
export default LanBookmarkPlus;
