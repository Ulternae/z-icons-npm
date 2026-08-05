import React from 'react';

export interface LanWatchAppleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchAppleThin(props: LanWatchAppleThinProps): React.ReactElement;
export default LanWatchAppleThin;
