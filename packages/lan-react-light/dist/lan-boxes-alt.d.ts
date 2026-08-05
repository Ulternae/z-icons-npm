import React from 'react';

export interface LanBoxesAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxesAlt(props: LanBoxesAltProps): React.ReactElement;
export default LanBoxesAlt;
