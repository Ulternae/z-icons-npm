import React from 'react';

export interface LanImageSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageSlashThin(props: LanImageSlashThinProps): React.ReactElement;
export default LanImageSlashThin;
