import React from 'react';

export interface LanDesktopAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDesktopAltThin(props: LanDesktopAltThinProps): React.ReactElement;
export default LanDesktopAltThin;
