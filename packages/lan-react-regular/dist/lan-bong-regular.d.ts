import React from 'react';

export interface LanBongRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBongRegular(props: LanBongRegularProps): React.ReactElement;
export default LanBongRegular;
