import React from 'react';

export interface LanShareAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShareAlt(props: LanShareAltProps): React.ReactElement;
export default LanShareAlt;
