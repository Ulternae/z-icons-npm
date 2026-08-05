import React from 'react';

export interface LanThumbTackSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanThumbTackSlashThin(props: LanThumbTackSlashThinProps): React.ReactElement;
export default LanThumbTackSlashThin;
