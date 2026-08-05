import React from 'react';

export interface LanDesktopCodeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDesktopCode(props: LanDesktopCodeProps): React.ReactElement;
export default LanDesktopCode;
