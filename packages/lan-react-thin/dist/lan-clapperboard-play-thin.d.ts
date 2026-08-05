import React from 'react';

export interface LanClapperboardPlayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClapperboardPlayThin(props: LanClapperboardPlayThinProps): React.ReactElement;
export default LanClapperboardPlayThin;
