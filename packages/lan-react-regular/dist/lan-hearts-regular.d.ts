import React from 'react';

export interface LanHeartsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeartsRegular(props: LanHeartsRegularProps): React.ReactElement;
export default LanHeartsRegular;
