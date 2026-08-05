import React from 'react';

export interface LanSdCardsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSdCardsSolid(props: LanSdCardsSolidProps): React.ReactElement;
export default LanSdCardsSolid;
