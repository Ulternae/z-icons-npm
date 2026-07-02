import React from 'react';

export interface CorePauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePause(props: CorePauseProps): React.ReactElement;
export default CorePause;
