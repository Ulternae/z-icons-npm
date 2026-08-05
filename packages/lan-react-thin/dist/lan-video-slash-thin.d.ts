import React from 'react';

export interface LanVideoSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVideoSlashThin(props: LanVideoSlashThinProps): React.ReactElement;
export default LanVideoSlashThin;
