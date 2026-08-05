import React from 'react';

export interface LanBullhornRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBullhornRegular(props: LanBullhornRegularProps): React.ReactElement;
export default LanBullhornRegular;
