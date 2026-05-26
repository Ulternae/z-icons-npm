import React from 'react';

export interface LanBookmarkCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookmarkCircleThin: React.FC<LanBookmarkCircleThinProps>;
export default LanBookmarkCircleThin;
