import React from 'react';

export interface LanSoftServeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSoftServe(props: LanSoftServeProps): React.ReactElement;
export default LanSoftServe;
