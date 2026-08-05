import React from 'react';

export interface LanCapricornProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCapricorn(props: LanCapricornProps): React.ReactElement;
export default LanCapricorn;
