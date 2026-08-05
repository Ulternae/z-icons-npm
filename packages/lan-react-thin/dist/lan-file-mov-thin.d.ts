import React from 'react';

export interface LanFileMovThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMovThin(props: LanFileMovThinProps): React.ReactElement;
export default LanFileMovThin;
