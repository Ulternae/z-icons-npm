import React from 'react';

export interface BruGoogleDriveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruGoogleDrive(props: BruGoogleDriveProps): React.ReactElement;
export default BruGoogleDrive;
