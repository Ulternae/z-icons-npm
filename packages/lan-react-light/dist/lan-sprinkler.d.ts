import React from 'react';

export interface LanSprinklerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSprinkler(props: LanSprinklerProps): React.ReactElement;
export default LanSprinkler;
