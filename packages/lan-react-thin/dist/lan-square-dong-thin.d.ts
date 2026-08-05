import React from 'react';

export interface LanSquareDongThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareDongThin(props: LanSquareDongThinProps): React.ReactElement;
export default LanSquareDongThin;
