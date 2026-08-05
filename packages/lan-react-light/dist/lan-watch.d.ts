import React from 'react';

export interface LanWatchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatch(props: LanWatchProps): React.ReactElement;
export default LanWatch;
