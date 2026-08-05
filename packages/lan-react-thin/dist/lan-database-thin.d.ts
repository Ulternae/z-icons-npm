import React from 'react';

export interface LanDatabaseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDatabaseThin(props: LanDatabaseThinProps): React.ReactElement;
export default LanDatabaseThin;
