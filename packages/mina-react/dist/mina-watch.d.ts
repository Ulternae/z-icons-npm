import React from 'react';

export interface MinaWatchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWatch(props: MinaWatchProps): React.ReactElement;
export default MinaWatch;
