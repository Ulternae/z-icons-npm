import React from 'react';

export interface LanTableSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTableSlashThin(props: LanTableSlashThinProps): React.ReactElement;
export default LanTableSlashThin;
