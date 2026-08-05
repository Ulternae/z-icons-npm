import React from 'react';

export interface LanARegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanARegular(props: LanARegularProps): React.ReactElement;
export default LanARegular;
