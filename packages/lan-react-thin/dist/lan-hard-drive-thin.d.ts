import React from 'react';

export interface LanHardDriveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHardDriveThin(props: LanHardDriveThinProps): React.ReactElement;
export default LanHardDriveThin;
