import React from 'react';

export interface LanPlayPauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlayPause(props: LanPlayPauseProps): React.ReactElement;
export default LanPlayPause;
