import React from 'react';

export interface LanScribbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScribble(props: LanScribbleProps): React.ReactElement;
export default LanScribble;
