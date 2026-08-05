import React from 'react';

export interface LanAlicornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlicornThin(props: LanAlicornThinProps): React.ReactElement;
export default LanAlicornThin;
