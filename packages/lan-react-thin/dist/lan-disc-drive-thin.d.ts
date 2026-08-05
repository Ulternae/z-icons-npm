import React from 'react';

export interface LanDiscDriveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiscDriveThin(props: LanDiscDriveThinProps): React.ReactElement;
export default LanDiscDriveThin;
