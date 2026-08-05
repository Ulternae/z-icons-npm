import React from 'react';

export interface LanSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlashThin(props: LanSlashThinProps): React.ReactElement;
export default LanSlashThin;
