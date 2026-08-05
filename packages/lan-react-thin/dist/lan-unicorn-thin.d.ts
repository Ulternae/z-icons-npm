import React from 'react';

export interface LanUnicornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUnicornThin(props: LanUnicornThinProps): React.ReactElement;
export default LanUnicornThin;
