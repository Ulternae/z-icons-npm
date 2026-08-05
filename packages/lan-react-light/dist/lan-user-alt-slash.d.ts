import React from 'react';

export interface LanUserAltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserAltSlash(props: LanUserAltSlashProps): React.ReactElement;
export default LanUserAltSlash;
