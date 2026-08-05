import React from 'react';

export interface LanTreeAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTreeAlt(props: LanTreeAltProps): React.ReactElement;
export default LanTreeAlt;
