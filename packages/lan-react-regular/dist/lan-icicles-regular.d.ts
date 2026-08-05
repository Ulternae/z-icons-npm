import React from 'react';

export interface LanIciclesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIciclesRegular(props: LanIciclesRegularProps): React.ReactElement;
export default LanIciclesRegular;
