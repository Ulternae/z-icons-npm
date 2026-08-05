import React from 'react';

export interface LanTextSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTextSlashThin(props: LanTextSlashThinProps): React.ReactElement;
export default LanTextSlashThin;
