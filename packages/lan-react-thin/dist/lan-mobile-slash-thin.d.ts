import React from 'react';

export interface LanMobileSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileSlashThin(props: LanMobileSlashThinProps): React.ReactElement;
export default LanMobileSlashThin;
