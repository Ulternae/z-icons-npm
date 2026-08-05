import React from 'react';

export interface LanWatchAppleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchApple(props: LanWatchAppleProps): React.ReactElement;
export default LanWatchApple;
