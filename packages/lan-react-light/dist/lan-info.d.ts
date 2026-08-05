import React from 'react';

export interface LanInfoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInfo(props: LanInfoProps): React.ReactElement;
export default LanInfo;
