import React from 'react';

export interface CorePlayPauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlayPause(props: CorePlayPauseProps): React.ReactElement;
export default CorePlayPause;
