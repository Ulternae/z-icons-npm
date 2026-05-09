import React from 'react';

export interface MinaBookmarkSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBookmarkSnooze: React.FC<MinaBookmarkSnoozeProps>;
export default MinaBookmarkSnooze;
