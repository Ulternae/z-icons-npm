import React from 'react';

export interface LanTurkeyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurkeyRegular(props: LanTurkeyRegularProps): React.ReactElement;
export default LanTurkeyRegular;
