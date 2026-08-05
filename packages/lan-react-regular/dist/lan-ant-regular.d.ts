import React from 'react';

export interface LanAntRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAntRegular(props: LanAntRegularProps): React.ReactElement;
export default LanAntRegular;
