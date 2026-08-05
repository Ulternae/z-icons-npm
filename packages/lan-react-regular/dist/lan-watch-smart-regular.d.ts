import React from 'react';

export interface LanWatchSmartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWatchSmartRegular(props: LanWatchSmartRegularProps): React.ReactElement;
export default LanWatchSmartRegular;
