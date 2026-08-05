import React from 'react';

export interface LanDesktopSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDesktopSlashThin(props: LanDesktopSlashThinProps): React.ReactElement;
export default LanDesktopSlashThin;
