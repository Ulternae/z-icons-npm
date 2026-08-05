import React from 'react';

export interface LanWatchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchRegular(props: LanWatchRegularProps): React.ReactElement;
export default LanWatchRegular;
