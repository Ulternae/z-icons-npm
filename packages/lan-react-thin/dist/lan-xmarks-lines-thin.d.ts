import React from 'react';

export interface LanXmarksLinesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanXmarksLinesThin(props: LanXmarksLinesThinProps): React.ReactElement;
export default LanXmarksLinesThin;
