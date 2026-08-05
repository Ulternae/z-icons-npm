import React from 'react';

export interface LanMittenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMitten(props: LanMittenProps): React.ReactElement;
export default LanMitten;
