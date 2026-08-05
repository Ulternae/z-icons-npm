import React from 'react';

export interface LanPlayPauseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlayPauseThin(props: LanPlayPauseThinProps): React.ReactElement;
export default LanPlayPauseThin;
