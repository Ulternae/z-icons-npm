import React from 'react';

export interface LanScrollOldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScrollOldSolid(props: LanScrollOldSolidProps): React.ReactElement;
export default LanScrollOldSolid;
