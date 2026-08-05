import React from 'react';

export interface LanCurlingStoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCurlingStoneThin(props: LanCurlingStoneThinProps): React.ReactElement;
export default LanCurlingStoneThin;
