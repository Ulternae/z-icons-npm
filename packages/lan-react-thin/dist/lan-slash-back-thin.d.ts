import React from 'react';

export interface LanSlashBackThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlashBackThin(props: LanSlashBackThinProps): React.ReactElement;
export default LanSlashBackThin;
