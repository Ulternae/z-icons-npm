import React from 'react';

export interface LanFileSvgThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSvgThin(props: LanFileSvgThinProps): React.ReactElement;
export default LanFileSvgThin;
