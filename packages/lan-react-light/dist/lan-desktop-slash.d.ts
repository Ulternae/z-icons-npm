import React from 'react';

export interface LanDesktopSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDesktopSlash(props: LanDesktopSlashProps): React.ReactElement;
export default LanDesktopSlash;
