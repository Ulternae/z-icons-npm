import React from 'react';

export interface LanFileImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileImageThin(props: LanFileImageThinProps): React.ReactElement;
export default LanFileImageThin;
