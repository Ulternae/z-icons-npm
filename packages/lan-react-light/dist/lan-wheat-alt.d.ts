import React from 'react';

export interface LanWheatAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWheatAlt(props: LanWheatAltProps): React.ReactElement;
export default LanWheatAlt;
