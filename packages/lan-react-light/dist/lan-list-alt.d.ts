import React from 'react';

export interface LanListAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListAlt(props: LanListAltProps): React.ReactElement;
export default LanListAlt;
