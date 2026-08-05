import React from 'react';

export interface LanBookmarkCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookmarkCircleThin(props: LanBookmarkCircleThinProps): React.ReactElement;
export default LanBookmarkCircleThin;
