import React from 'react';

export interface LanIconsAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanIconsAlt(props: LanIconsAltProps): React.ReactElement;
export default LanIconsAlt;
