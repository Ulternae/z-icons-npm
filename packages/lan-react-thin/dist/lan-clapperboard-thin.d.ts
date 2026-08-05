import React from 'react';

export interface LanClapperboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClapperboardThin(props: LanClapperboardThinProps): React.ReactElement;
export default LanClapperboardThin;
