import React from 'react';

export interface LanScrollOldProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollOld(props: LanScrollOldProps): React.ReactElement;
export default LanScrollOld;
