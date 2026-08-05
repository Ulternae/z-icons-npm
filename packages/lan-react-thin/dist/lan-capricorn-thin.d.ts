import React from 'react';

export interface LanCapricornThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCapricornThin(props: LanCapricornThinProps): React.ReactElement;
export default LanCapricornThin;
