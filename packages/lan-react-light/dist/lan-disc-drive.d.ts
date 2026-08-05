import React from 'react';

export interface LanDiscDriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDiscDrive(props: LanDiscDriveProps): React.ReactElement;
export default LanDiscDrive;
