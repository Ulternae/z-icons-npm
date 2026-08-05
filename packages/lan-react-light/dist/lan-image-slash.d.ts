import React from 'react';

export interface LanImageSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageSlash(props: LanImageSlashProps): React.ReactElement;
export default LanImageSlash;
