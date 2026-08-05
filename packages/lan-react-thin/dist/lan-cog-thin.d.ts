import React from 'react';

export interface LanCogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCogThin(props: LanCogThinProps): React.ReactElement;
export default LanCogThin;
