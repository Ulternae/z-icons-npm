import React from 'react';

export interface LanMittenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMittenThin(props: LanMittenThinProps): React.ReactElement;
export default LanMittenThin;
