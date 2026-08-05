import React from 'react';

export interface LanMobileSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMobileSlash(props: LanMobileSlashProps): React.ReactElement;
export default LanMobileSlash;
