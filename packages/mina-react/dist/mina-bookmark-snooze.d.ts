import React from 'react';

export interface MinaBookmarkSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookmarkSnooze(props: MinaBookmarkSnoozeProps): React.ReactElement;
export default MinaBookmarkSnooze;
