import React from 'react';

export interface LanBoomboxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoomboxRegular(props: LanBoomboxRegularProps): React.ReactElement;
export default LanBoomboxRegular;
