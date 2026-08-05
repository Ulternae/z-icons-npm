import React from 'react';

export interface LanCornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCorn(props: LanCornProps): React.ReactElement;
export default LanCorn;
