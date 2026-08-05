import React from 'react';

export interface NeoPlayPauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPlayPause(props: NeoPlayPauseProps): React.ReactElement;
export default NeoPlayPause;
