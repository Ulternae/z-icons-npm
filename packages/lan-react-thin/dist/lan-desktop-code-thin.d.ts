import React from 'react';

export interface LanDesktopCodeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDesktopCodeThin(props: LanDesktopCodeThinProps): React.ReactElement;
export default LanDesktopCodeThin;
