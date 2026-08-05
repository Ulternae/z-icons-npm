import React from 'react';

export interface LanTricycleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTricycleRegular(props: LanTricycleRegularProps): React.ReactElement;
export default LanTricycleRegular;
