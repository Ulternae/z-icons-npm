import React from 'react';

export interface LanSlashForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSlashForward(props: LanSlashForwardProps): React.ReactElement;
export default LanSlashForward;
