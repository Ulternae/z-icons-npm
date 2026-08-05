import React from 'react';

export interface LanSlashBackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlashBack(props: LanSlashBackProps): React.ReactElement;
export default LanSlashBack;
