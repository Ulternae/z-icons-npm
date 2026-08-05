import React from 'react';

export interface LanDesktopAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDesktopAlt(props: LanDesktopAltProps): React.ReactElement;
export default LanDesktopAlt;
