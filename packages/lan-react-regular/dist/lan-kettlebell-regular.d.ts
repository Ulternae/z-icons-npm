import React from 'react';

export interface LanKettlebellRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKettlebellRegular(props: LanKettlebellRegularProps): React.ReactElement;
export default LanKettlebellRegular;
