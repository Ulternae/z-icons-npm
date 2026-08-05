import React from 'react';

export interface LanJediRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanJediRegular(props: LanJediRegularProps): React.ReactElement;
export default LanJediRegular;
