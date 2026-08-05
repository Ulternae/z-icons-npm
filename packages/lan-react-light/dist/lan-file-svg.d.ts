import React from 'react';

export interface LanFileSvgProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileSvg(props: LanFileSvgProps): React.ReactElement;
export default LanFileSvg;
